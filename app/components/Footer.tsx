import { logo } from "../../public";
import { footerLinks, socialMedia } from "../constants";
import Image from "next/image";

const Footer = () => (
  <section className="flexCenter py-4 flex-col bg-black text-white">
    <div className="flex justify-between w-full items-center mb-8"> {/* Added justify-between to space out elements */}
      {/* Logo on the left */}
      <div className="flex-[1] flex flex-col justify-start">
        <Image
          src={logo}
          alt="hoobank"
          width={266}
          height={72}
          priority={true}
          className="object-contain"
        />
      </div>

      {/* Copyright text and social media icons on the right */}
      <div className="flex flex-col items-end justify-end"> {/* Align content to the right */}
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px]">
          Copyright Ⓒ 2024 SNTLY. All Rights Reserved.
        </p>

        <div className="flex flex-row mt-4 justify-center"> {/* Added justify-end to align icons to the right */}
          {socialMedia.map((social, index) => (
            <Image
              key={social.id}
              src={social.icon}
              alt={social.id}
              width={21}
              height={21}
              priority={true}
              className={`object-contain cursor-pointer hover:opacity-75 ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
