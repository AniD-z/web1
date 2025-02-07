"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const steps = [
  { text: "Design & Development ", summary: "Understanding your vision, trends, and requirements." },
  { text: "Sourcing & Vendor Selection", summary: "Finding the right manufacturers and suppliers globally." },
  { text: "Material & Fabric Procurement ", summary: " Sourcing high-quality fabrics, trims, and materials." },
  { text: "Sampling & Prototyping", summary: "Creating samples and prototypes for approval." },
  { text: "Production Management", summary: " Overseeing bulk production with strict quality control." },
  { text: "In-House Quality Control", summary: "Ensuring high standards through inspections and testing." },
  { text: "Logistics & Supply Chain", summary: "Managing shipping, warehousing, and smooth delivery" },
]

const SineCurveAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  // Handle changing the summary
  const [summaryIndex, setSummaryIndex] = useState(0)

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => setCurrentStep(currentStep + 1), 2000)
      return () => clearTimeout(timer)
    } else {
      setIsComplete(true)
    }
  }, [currentStep])

  useEffect(() => {
    const loopTimer = setInterval(() => {
      setSummaryIndex((prevIndex) => (prevIndex + 1) % steps.length)
    }, 3000) // Change summary every 3 seconds
    return () => clearInterval(loopTimer)
  }, [])

  const pathLength = 1300  // Increased the length to give space on both ends
  const amplitude = 70
  const frequency = 0.7

  const path =
    `M0,${amplitude} ` +
    Array.from({ length: pathLength }, (_, i) => i)
      .map((x) => `L${x},${amplitude + Math.sin((x * frequency * Math.PI) / 180) * amplitude}`)
      .join(" ")

  return (
    <div className="w-full max-w-5xl mx-auto perspective-1000">
      {/* SVG is shown on medium and larger screens (hidden on small screens) */}
      <svg className="w-full h-96 hidden md:block" viewBox={`0 0 ${pathLength} ${amplitude * 2}`} >
        <motion.path d={path} fill="none" stroke="#e0e0e0" strokeWidth="2" />
        <motion.path
          d={path}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isComplete ? 1 : currentStep / steps.length }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {steps.map((step, index) => {
          const x = (pathLength / (steps.length - 1)) * index
          const y = amplitude + Math.sin((x * frequency * Math.PI) / 180) * amplitude

          // Add a buffer zone on the edges to avoid clipping
          const adjustedX = Math.min(Math.max(x, 50), pathLength - 50)  // Ensure text stays within the viewBox with a 50px margin on both sides

          return (
            <motion.g
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentStep > index ? 1 : 0 }}
              style={{
                transform: `translateZ(${currentStep * 10}px)`  // Apply the Z-axis translation to bring the elements forward
              }}
            >
              <circle cx={x} cy={y} r="10" fill="#3b82f6" />
              <text
                x={adjustedX}
                y={y - 15}
                textAnchor="middle"
                fontSize="25"
                fill="#333"
              >
                {step.text}
              </text>
            </motion.g>
          )
        })}
      </svg>

      {/* Desktop Summary (not looping) */}
      <motion.div
        className="mt-8 text-center text-xl font-semibold hidden md:block border-t-4 border-b-4 border-gray-300"
        key={currentStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {currentStep < steps.length ? steps[currentStep].summary : "Process Complete!"}
      </motion.div>

      {/* Mobile Responsiveness: Display summary text animation on mobile */}
      <div className="md:hidden block mt-8 text-center text-0.7xl font-semibold">
        <motion.div
          className="summary-loop p-6 border-t-4 border-b-4 border-gray-300 rounded-md"
          key={summaryIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {steps[summaryIndex].summary}
        </motion.div>
      </div>

      {/* Loop the summary text animation only on mobile */}
      <style jsx>{`
        .summary-loop {
          animation: loopSummary 3s linear infinite; /* Loop the summary animation every 3 seconds */
        }

        @keyframes loopSummary {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          50% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  )
}

export default SineCurveAnimation
