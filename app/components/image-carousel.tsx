"use client"

import * as React from "react"
import Image from "next/image"
import { motion, useAnimationControls } from "framer-motion"
import { cn } from "@/lib/utils"

interface MasonryCarouselProps {
  images: {
    src: string
    alt: string
    width: number
    height: number
    priority?: boolean
    className?: string
  }[] 
  className?: string
}

export function MasonryCarousel({ images, className }: MasonryCarouselProps) {
  const controls = useAnimationControls()
  const [isHovered, setIsHovered] = React.useState(false)

  React.useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: [0, -50 * images.length],
        transition: {
          duration: (20 * images.length) / (isHovered ? 4 : 1),
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        },
      })
    }
    animate()
  }, [controls, images.length, isHovered])

  // Split images into two groups for top and bottom rows
  const topRowImages = images.slice(0, Math.ceil(images.length / 2))
  const bottomRowImages = images.slice(Math.ceil(images.length / 2))

  return (
    <div
      className={cn("relative overflow-hidden w-full", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex gap-8 absolute left-0 top-0 h-full"
        animate={controls}
        style={{ width: "fit-content" }}
      >
        {/* First set of images */}
        <div className="flex flex-col gap-4">
          {/* Mobile view - single row of square images at the bottom */}
          <div className="flex gap-4 lg:hidden justify-end">
            {images.map((image, index) => (
              <div key={`mobile-${image.src}-1`} className="relative w-[200px] h-[200px] shrink-0">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="200px"
                  priority={image.priority}
                />
              </div>
            ))}
          </div>

          {/* Desktop view - two rows with different heights */}
          <div className="hidden lg:flex gap-4">
            {topRowImages.map((image, index) => (
              <div key={`${image.src}-top-1`} className="relative w-[300px] h-[250px] shrink-0">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="300px"
                  priority={image.priority}
                />
              </div>
            ))}
          </div>
          <div className="hidden lg:flex gap-4">
            {bottomRowImages.map((image, index) => (
              <div key={`${image.src}-bottom-1`} className="relative w-[300px] h-[350px] shrink-0">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="300px"
                  priority={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex flex-col gap-4">
          {/* Mobile view - single row of square images at the bottom */}
          <div className="flex gap-4 lg:hidden justify-end">
            {images.map((image, index) => (
              <div key={`mobile-${image.src}-2`} className="relative w-[200px] h-[200px] shrink-0">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="200px"
                  priority={false}
                />
              </div>
            ))}
          </div>

          {/* Desktop view - two rows with different heights */}
          <div className="hidden lg:flex gap-4">
            {topRowImages.map((image, index) => (
              <div key={`${image.src}-top-2`} className="relative w-[300px] h-[250px] shrink-0">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="300px"
                  priority={false}
                />
              </div>
            ))}
          </div>
          <div className="hidden lg:flex gap-4">
            {bottomRowImages.map((image, index) => (
              <div key={`${image.src}-bottom-2`} className="relative w-[300px] h-[350px] shrink-0">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="300px"
                  priority={false}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
