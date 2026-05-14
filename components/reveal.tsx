"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}

export function Reveal({ children, className = "", delay = 0, y = 24, once = true }: RevealProps) {
  const reduced = useReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface RevealStaggerProps {
  children: React.ReactNode
  className?: string
  stagger?: number
  delay?: number
}

export function RevealStagger({ children, className = "", stagger = 0.08, delay = 0 }: RevealStaggerProps) {
  const reduced = useReducedMotion()

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  }

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}
