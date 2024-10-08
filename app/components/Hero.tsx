"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn } from "../styles/animations";
import { discount, robot } from "../../public";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col paddingY">
      <motion.div
  className="flex-1 flexStart flex-col xl:px-0 paddingX"
  variants={slideIn("left", "tween", 0.1, 0.5)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  <div className="flex flex-row justify-between items-center w-full">
    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
      Threaded  <br className="sm:block hidden" />{" "}
      <span className="text-gradient">Sustainably </span>{" "}
    </h1>
    <div className="ss:flex hidden md:mr-4 mr-0">
      <GetStarted />
    </div>
  </div>
  <p className="paragraph max-w-[470px] mt-5">
    Our team of experts uses a methodology to identify the finest fabrics that are most likely to meet your
    customers' needs. We examine thread counts, fabric weights, and weave densities to ensure the exceptional quality
    of our premium cloths, which we supply to other brands.
  </p>
</motion.div>

<div className="flex-1 flexCenter md:my-0 my-10 relative">
  <Image
    src={robot}
    alt="billing"
    width={0}
    height={0}
    className="sm:w-[100%] w-[90%] sm:h-[100%] h-[90%] relative z-[5]"
    priority={true}
  />

  {/* gradient start */}
  <div className="absolute z-[0] w-[30%] h-[30%] top-0 pink__gradient" />
  <div className="absolute z-[1] w-[60%] h-[60%] rounded-full white__gradient bottom-40" />
  <div className="absolute z-[0] w-[40%] h-[40%] right-20 bottom-20 blue__gradient" />
  {/* gradient end */}
</div>



      <div className="ss:hidden flexCenter">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
