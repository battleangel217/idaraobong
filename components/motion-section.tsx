"use client"

import { motion, useInView } from "framer-motion"
import { ReactNode, useRef } from "react"

interface MotionSectionProps {
  children: ReactNode
  delay?: number
  className?: string
  effect?: "fade-up" | "slide-left" | "slide-right" | "zoom-in-up" | "none"
}

export function MotionSection({ 
  children, 
  delay = 0, 
  className,
  effect = "fade-up"
}: MotionSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 }
    },
    "slide-left": {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 }
    },
    "slide-right": {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 }
    },
    "zoom-in-up": {
      hidden: { opacity: 0, y: 100, scale: 0.8 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          type: "spring",
          damping: 20,
          stiffness: 100
        }
      }
    },
    "none": {
        hidden: {},
        visible: {}
    }
  }

  const selectedVariant = variants[effect] || variants["fade-up"];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedVariant}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
