"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "../../lib/utils"

interface CarouselProps {
  images: {
    src: string
    alt: string
  }[]
  className?: string
}

export function ImageCarousel({ images, className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className={cn("relative h-[70vh] w-full overflow-hidden bg-background", className)}>
      {images.map((image, index) => (
        <div
          key={image.src}
          className={cn("absolute h-full w-full transition-transform duration-500 ease-in-out", {
            "translate-x-0 opacity-100": index === currentIndex,
            "translate-x-full opacity-0": index > currentIndex,
            "-translate-x-full opacity-0": index < currentIndex,
          })}
        >
         <div className="relative w-full h-0 pb-[200%] sm:pb-[225%] lg:pb-[100%] md:pb-[100%]">
  <Image
    src={image.src || "/placeholder.svg"}
    alt={image.alt}
    layout="fill"            // Ensures the image covers the entire div
    objectFit="cover"        // Ensures the image covers the area, preserving aspect ratio
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"  // Responsive sizing for different screen widths
    priority={index === 0}
  />
</div>


        </div>
      ))}
    </div>
  )
}

