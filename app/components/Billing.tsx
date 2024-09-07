"use client";
import { apple, bill, google } from "../../public";
import { slideIn } from "../styles/animations";
import Image from "next/image";
import { motion } from "framer-motion";

const Billing = () => (
  <section id="product" className="sectionReverse">
    <motion.div
  className="sectionImgReverse relative"
  variants={slideIn("left", "tween", 0.1, 0.5)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  <Image
    src={bill}
    alt="billing"
    layout="fill"
    objectFit="cover"
    className="w-full h-full relative z-[5]"
  />

  {/* Simplified gradients */}
  <div className="absolute z-[3] -left-1/2 top-0 w-[40%] h-[40%] rounded-full white__gradient" />
  <div className="absolute z-[0] w-[40%] h-[40%] -left-1/2 bottom-0 rounded-full pink__gradient" />
</motion.div>

<motion.div
  className="sectionInfo relative"
  variants={slideIn("right", "tween", 0.1, 0.5)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  <Image
    src={bill}
    alt="billing"
    layout="fill"
    objectFit="cover"
    className="w-full h-full relative z-[5]"
  />
</motion.div>


  </section>
);

export default Billing;
