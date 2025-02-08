"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const steps = [
  { text: "Design & Development", summary: "Design & Development" },
  { text: "Sourcing & Vendor Selection", summary: " Finding the right manufacturers and suppliers globally" },
  { text: "Fabric Procurement", summary: "Sourcing high-quality fabrics, trims, and materials" },
  { text: "Sampling", summary: " Creating samples and prototypes for approval" },
  { text: "Production Management", summary: "Overseeing bulk production with strict quality control" },
  { text: "In-House Quality Control", summary: "Ensuring high standards through inspections and testing" },
  { text: "Logistics & Supply Chain", summary: "Managing shipping, warehousing, and smooth delivery" },
]

const OctagonalProcessFlow = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep < steps.length - 1) {
          return prevStep + 1
        } else {
          setIsComplete(true)
          return 0 // Reset to start for infinite loop
        }
      })
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const size = 400 // Increased size for the SVG
  const center = size / 2
  const radius = size * 0.4

  const getPoint = (index: number) => {
    const angle = (Math.PI / 4) * index - Math.PI / 8
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    }
  }

  const octagonPath =
    Array.from({ length: 8 }, (_, i) => {
      const point = getPoint(i)
      return `${i === 0 ? "M" : "L"}${point.x},${point.y}`
    }).join(" ") + "Z"

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="hidden md:block">
        <svg className="w-full h-[400px]" viewBox={`0 0 ${size} ${size}`}>
          <motion.path d={octagonPath} fill="none" stroke="#e0e0e0" strokeWidth="2" />
          <motion.path
            d={octagonPath}
            fill="none"
            stroke="#4a4a4a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isComplete ? 1 : (currentStep + 1) / steps.length }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          {steps.map((step, index) => {
            const point = getPoint(index)
            return (
              <motion.g key={index} initial={{ opacity: 0 }} animate={{ opacity: currentStep >= index ? 1 : 0 }}>
                <circle cx={point.x} cy={point.y} r="6" fill="#4a4a4a" /> {/* Increased circle size */}
                <text x={point.x} y={point.y - 12} textAnchor="middle" fontSize="14" fill="#333"> {/* Increased font size */}
                  {step.text}
                </text>
              </motion.g>
            )
          })}
        </svg>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="inline-block px-8 py-4 border-t border-b border-gray-300 rounded-lg shadow-md bg-white"> {/* Increased padding and styling */}
            <h2 className="text-2xl font-semibold mb-3">{steps[currentStep].text}</h2> {/* Increased font size */}
            <p className="text-gray-600 text-lg">{steps[currentStep].summary}</p> {/* Increased font size */}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default OctagonalProcessFlow
