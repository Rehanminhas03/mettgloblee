"use client"

import { motion } from "framer-motion"

export function TeamHero() {
  return (
    <section className="relative pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-primary sm:w-10"
            />
            <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-primary/80">Our Team</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-4 sm:mb-5">
            <span className="block text-gradient-subtle">The Minds</span>
            <span className="block text-gradient">Behind The Magic</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
            A team of visionaries, innovators, and experts dedicated to delivering exceptional digital solutions from
            Pakistan to the world.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
