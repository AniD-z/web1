"use client"

import { motion } from "framer-motion"
import { MasonryCarousel } from "./image-carousel"
import { FloatingPaths } from "./FloatingPaths"
import GetStarted from "./GetStarted"

const images = [
  {
    src: "https://i.imgur.com/KfodASO.jpg",
    alt: "Textile production process showcasing craftsmanship",
    width: 400,
    height: 300,
    priority: true,
  },
  {
    src: "https://i.imgur.com/1ZUoXMv.png",
    alt: "Detailed view of textile manufacturing",
    width: 400,
    height: 300,
  },
  {
    src: "https://i.imgur.com/WyhwLeT.png",
    alt: "Premium fabric production process",
    width: 400,
    height: 300,
  },
  {
    src: "https://i.imgur.com/RfCCxJ9.png",
    alt: "Quality control in textile manufacturing",
    width: 400,
    height: 300,
  },
  {
    src: "https://i.imgur.com/DOEupSE.png",
    alt: "Artisanal textile crafting process",
    width: 400,
    height: 300,
  },
  {
    src: "https://i.imgur.com/hQjlnMd.png",
    alt: "Precision in textile production",
    width: 400,
    height: 300,
  },
]

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <motion.div
        className="flex-1 flex flex-col justify-center px-6 lg:px-12 py-12 relative z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Artisanal Excellence in
          <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent block mt-2">
            Textile Craftsmanship
          </span>
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-xl">
          Where tradition meets innovation, creating premium textiles that define luxury and sustainability.
        </p>

        <div className="mt-8">
          <GetStarted />
        </div>
      </motion.div>

      <div className="flex-1 relative z-10 h-[400px] lg:h-screen">
        <MasonryCarousel images={images} className="w-full h-full" />
      </div>
    </section>
  )
}