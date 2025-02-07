"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../styles/animations";
import { features } from "../constants";
import Button from "./Button";

interface featureCardProps {
  icon: string;
  title: string;
  content: string;
  index: number;
}

const FeatureCard = ({ icon, title, content, index }: featureCardProps) => (
  <div
    className={`flex p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className="w-[64px] h-[64px] rounded-full flexCenter bg-dimBlue">
      <Image
        src={icon}
        alt="icon"
        width={0}
        height={0}
        className="w-[50%] h-[50%] object-contain"
        priority={true}
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h1 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h1>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className="section h-screen flex items-center justify-center">
    <motion.div
      className="sectionInfo flex flex-col items-center text-center w-full" // Added w-full to ensure full width
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h1 className="heading2 paddingX">
        ABOUT US
      </h1>
      
      <p className=" paragraph max-w-[1020px] mx-auto mt-10 ">
  We are a one-stop solution for all your apparel sourcing and supply chain needs.
  With a strong network of vendors globally. <br /><br />

  Our services go beyond sourcing, we provide end-to-end supply chain management, quality control solutions, and full logistics support.
  From selecting the right suppliers to ensuring top-notch product quality and smooth delivery, we handle everything so you can focus on growing your brand. <br /><br />

  Whether you&rsquo;re a fashion brand, retailer, or designer, we simplify the sourcing process and ensure a hassle-free experience with reliable, efficient, and high-quality solutions. <br /><br />
</p>


    </motion.div>
  </section>
);


export default Business;


