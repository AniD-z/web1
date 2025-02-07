"use client";
import { motion } from "framer-motion";
import { slideIn } from "../styles/animations";
import Button from "./Button";

const CardDeal = () => (
  <section className="section flex items-center justify-center min-h-screen"> {/* Centers content vertically and horizontally */}
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
      <p className="paragraph max-w-[570px] mt-5 mx-auto">
        To be the most reliable and innovative apparel-sourcing partner, empowering global brands with sustainable and efficient manufacturing solutions.
      </p>

      {/* If you'd like to keep the button, you can uncomment the following: */}
      {/* <Button /> */}
    </motion.div>
  </section>
);

export default CardDeal;

