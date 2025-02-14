"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../styles/animations";
import Image from "next/image";
import { close, logo, menu } from "../../public";
import Link from "next/link"; // Import Link from next/link
import { navLinks } from "../constants/index";
import ContactForm from "./ContactForm"; // Import the ContactForm component

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false); // State for opening/closing the contact form

  // UseRef with correct type
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setToggle(false); // Close the menu if click is outside
      }
    };

    if (toggle) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggle]);

  // Updated handleContactClick to explicitly accept a MouseEvent
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the default behavior of the link
    setIsContactFormOpen(true); // Open the ContactForm when "Contact Us" is clicked
  };

  const handleCloseForm = () => {
    setIsContactFormOpen(false); // Close the form
  };

  return (
    <>
      {/* The Navbar */}
      <motion.nav
        className="w-full flex px-16 py-0 justify-between items-center navbar bg-black overflow-hidden 
                sm:border-radius-md md:border-radius-sm lg:border-radius-md border-radius-md fixed top-0 left-0 z-50"
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Image src={logo} alt="hoobank" width={174} height={48} loading="eager" />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary ${
                active === nav.title ? "text-secondary" : "text-white"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={(e) => {
                setActive(nav.title);
                if (nav.title === "Contact Us") {
                  handleContactClick(e); // Open the ContactForm when "Contact Us" is clicked
                }
              }}
            >
              <Link href={nav.path}>{nav.title}</Link> {/* Link */}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            width={14}
            height={14}
            priority={true}
            className="object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </motion.nav>

      {/* Add padding to the body to push content below the navbar */}
      <div className="pt-[70px] sm:pt-[80px] md:pt-[100px] lg:pt-[40px]">
        {/* Content of your page goes here */}
        {/* Everything else on the page will be pushed below the navbar */}
      </div>

      {/* Sidebar menu with full-page background but leaving a gap on the left */}
      <div
        ref={menuRef}
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 bg-black bg-opacity-90 fixed top-0 right-0 w-[calc(100%-80px)] h-full z-50 sm:left-0`} // Changed to 'fixed' here
      >
        {/* Close Button positioned at the top-right */}
        <div className="absolute top-4 right-4">
          <Image
            src={close}
            alt="close menu"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={() => setToggle(false)}
          />
        </div>

        <ul className="list-none flex justify-start items-center flex-1 flex-col pl-6">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[24px] ${
                active === nav.title ? "text-secondary" : "text-white"
              } ${index === navLinks.length - 1 ? "mb-1" : "mb-5"}`}
              onClick={(e) => {
                setActive(nav.title);
                if (nav.title === "Contact Us") {
                  handleContactClick(e); // Open the ContactForm when "Contact Us" is clicked
                }
              }}
            >
              <Link href={nav.path} key={nav.id}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Show the ContactForm popup if it's open */}
      {isContactFormOpen && <ContactForm onClose={handleCloseForm} />}
    </>
  );
};

export default Navbar;
