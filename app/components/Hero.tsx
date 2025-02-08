"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { slideIn } from "../styles/animations"
import { robot } from "../../public"
import GetStarted from "./GetStarted"
import { FloatingPaths } from "../components/FloatingPaths"
import { ImageCarousel } from "../components/image-carousel"

const images = [
  {
    src: "https://i.imgur.com/KfodASO.jpg",
    alt: "Textile production images showing sewing and dyeing processes",
    width: 400,  // Use numeric values for width and height
    height: 300,
    priority: false, // Set priority to false unless critical
  },
  {
    src: "https://i.imgur.com/1ZUoXMv.png",
    alt: "Textile production images showing sewing and dyeing processes",
    width: 400,
    height: 300,
    priority: true, // Set to true for LCP (above-the-fold) image
  },
  {
    src: "https://i.imgur.com/WyhwLeT.png",
    alt: "Textile production images showing sewing and dyeing processes",
    width: 400,
    height: 300,
    priority: false,
  },
  {
    src: "https://i.imgur.com/RfCCxJ9.png",
    alt: "Textile production images showing sewing and dyeing processes",
    width: 400,
    height: 300,
    priority: false,
  },
  {
    src: "https://i.imgur.com/DOEupSE.png",
    alt: "Textile production images showing sewing and dyeing processes",
    width: 400,
    height: 300,
    priority: false,
  },
  {
    src: "https://i.imgur.com/hQjlnMd.png",
    alt: "Textile production images showing sewing and dyeing processes",
    width: 400,
    height: 300,
    priority: false,
  },
  {
    src: "https://i.imgur.com/dzyvom3.png",
    alt: "Textile production images showing sewing and dyeing processes",
    width: 400,
    height: 300,
    priority: false,
  },
  {
    src: "https://i.imgur.com/0HO9GA3.png",
    alt: "Textile production images showing sewing and dyeing processes",
    width: 400,
    height: 300,
    priority: false,
  },
  {
    src: "https://i.imgur.com/japxRlz.png",
    alt: "Textile production images showing sewing and dyeing processes",
    width: 400,
    height: 300,
    priority: false,
  },
  {
    src: "https://i.imgur.com/QerdJKg.png",
    alt: "Textile production images showing sewing and dyeing processes",
    width: 400,
    height: 300,
    priority: false,
  },
];

const Hero = () => {
  return (
    <section id="/home" className="flex md:flex-row flex-col relative">
      {/* Add FloatingPaths here */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <motion.div
        className="flex-1 flexStart flex-col xl:px-0 padding relative z-10"
        variants={slideIn("left", "tween", 0.1, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="flex flex-col ss:flex-row justify-center ss:justify-between items-center w-full paddingY">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[36px] text-black ss:leading-[60px] leading-[50px] text-center ss:text-left">
            Concept to Delivery <br className="sm:block hidden" /> <span className="text-gradient">Solution</span>
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <p className="paragraph max-w-[470px] mt-5 ss:text-[26px] text-[20px]">
          “Turning Ideas into Reality, Every Step of the Way.”
        </p>
      </motion.div>

      <div className="flex-1 flex justify-center items-center paddingX md:my-0 my-10 relative z-10">
        <ImageCarousel
          images={images.map((image) => ({
            ...image,
            // Use Next.js Image with priority and width/height auto to preserve aspect ratio
            component: (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                priority={image.priority}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            ),
          }))}
          className="h-screen w-full overflow-hidden"
        />
      </div>
    </section>
  );
}

export default Hero;
