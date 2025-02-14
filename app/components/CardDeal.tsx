"use client"

import { motion } from "framer-motion"
import { slideIn } from "../styles/animations"
import Image from "next/image"
import logoc1 from "../../public/logoc1.png"
import logoc2 from "../../public/logoc2.png"
import logoc3 from "../../public/logoc3.png"

const PremiumBrands = () => (
  <section className="section flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <motion.div
      className="w-full max-w-6xl mx-auto px-4"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Trusted by Leading Luxury Brands</h2>

      <div className="relative py-12 px-6 mb-16">
        {/* Top border */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        {/* Brand logos */}
        <div className="flex justify-center items-center gap-12 mb-12">
          <Image
            src={logoc1 || "/placeholder.svg"}
            alt="brand 1"
            width={120}
            height={120}
            className="object-contain grayscale hover:grayscale-0 transition-all duration-300 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44"
          />
          <Image
            src={logoc2 || "/placeholder.svg"}
            alt="brand 2"
            width={120}
            height={120}
            className="object-contain grayscale hover:grayscale-0 transition-all duration-300 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44"
          />
          <Image
            src={logoc3 || "/placeholder.svg"}
            alt="brand 3"
            width={120}
            height={120}
            className="object-contain grayscale hover:grayscale-0 transition-all duration-300 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44"
          />
        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg italic leading-relaxed">
        "To be the most reliable and innovative apparel-sourcing partner, empowering global brands with sustainable and
        efficient manufacturing solutions."
      </p>
    </motion.div>
  </section>
)

export default PremiumBrands