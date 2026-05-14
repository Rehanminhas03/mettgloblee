"use client"

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion"
import { useRef } from "react"

interface Card3DProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  hoverLift?: number
}

export function Card3D({ children, className = "", intensity = 8, hoverLift = 6 }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const lift = useMotionValue(0)

  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), springConfig)
  const translateY = useSpring(lift, springConfig)

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  function handleEnter() {
    if (reduced) return
    lift.set(-hoverLift)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
    lift.set(0)
  }

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        y: translateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className={`relative will-change-transform [@media(hover:none)]:!transform-none ${className}`}
    >
      {children}
    </motion.div>
  )
}
