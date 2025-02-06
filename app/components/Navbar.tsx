"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../styles/animations";
import Image from "next/image";
import { close, logo, menu } from "../../public";
import Link from "next/link"; // Import Link from next/link
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      className="w-full flex px-10 py-0 justify-between items-center navbar bg-black overflow-hidden 
                sm:border-radius-md md:border-radius-sm lg:border-radius-md border-radius-md" 
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
            onClick={() => setActive(nav.title)}
          >
            {/* Replaced <a> with Link */}
            <Link href={nav.path}>{nav.title}</Link>
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

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute right-0 mx-4 my-2 min-w-[160px] rounded-xl sidebar z-50`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[12px] ${
                  active === nav.title ? "text-secondary" : "text-white"
                } ${index === navLinks.length - 1 ? "mb-1" : "mb-5"}`}
                onClick={() => setActive(nav.title)}
              >
                {/* Replaced <a> with Link */}
                <Link href={nav.path} key={nav.id}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
