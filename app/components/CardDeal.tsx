"use client";
import { motion } from "framer-motion";
import { slideIn } from "../styles/animations";
import Image from "next/image"; // Import Image component to display images
import logoc1 from '../../public/logoc1.png';
import logoc2 from '../../public/logoc2.png';
import logoc3 from '../../public/logoc3.png';

const CardDeal = () => (
  <section className="section flex items-center justify-center min-h-screen">
    {/* Centers content vertically and horizontally */}
    <motion.div
      className="sectionInfo text-center"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="heading2">
        Trusted by Leading Luxury Brands
      </h2>

      {/* Flex container centered */}
      <div className="flex justify-center items-center gap-6 mt-8 mb-8">
        {/* Image 1 */}
        <Image
          src={logoc1}
          alt="brand 1"
          width={100}
          height={100}
          className="object-contain grayscale sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" // Responsive sizes and grayscale effect
        />
        {/* Image 2 */}
        <Image
          src={logoc2}
          alt="brand 2"
          width={100}
          height={100}
          className="object-contain grayscale sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" // Responsive sizes and grayscale effect
        />
        {/* Image 3 */}
        <Image
          src={logoc3}
          alt="brand 3"
          width={100}
          height={100}
          className="object-contain grayscale sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" // Responsive sizes and grayscale effect
        />
      </div>

      <p className="paragraph max-w-[570px] mt-5 mx-auto italic">
        To be the most reliable and innovative apparel-sourcing partner, empowering global brands with sustainable and efficient manufacturing solutions.
      </p>

      {/* If you'd like to keep the button, you can uncomment the following: */}
      {/* <Button /> */}
    </motion.div>
  </section>
);

export default CardDeal;
