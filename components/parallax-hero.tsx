"use client"

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useRef } from "react"

interface ParallaxHeroProps {
  children: React.ReactNode
  className?: string
  intensity?: "light" | "medium" | "strong"
}

const intensityMap = {
  light: { y: 30, opacity: 0.7, scale: 0.98 },
  medium: { y: 60, opacity: 0.4, scale: 0.95 },
  strong: { y: 100, opacity: 0.2, scale: 0.9 },
}

export function ParallaxHero({ children, className = "", intensity = "medium" }: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const config = intensityMap[intensity]
  const y = useTransform(scrollYProgress, [0, 1], [0, config.y])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, config.opacity])
  const scale = useTransform(scrollYProgress, [0, 1], [1, config.scale])

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div ref={ref} style={{ y, opacity, scale }} className={className}>
      {children}
    </motion.div>
  )
}
