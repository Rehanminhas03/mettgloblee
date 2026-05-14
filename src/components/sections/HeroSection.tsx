"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-2xl glass-card rotate-12 opacity-30"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] right-[8%] w-24 h-24 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-xl glass-card -rotate-6 opacity-25"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 }}
          className="absolute top-[35%] right-[20%] w-20 h-20 sm:w-28 sm:h-28 rounded-full glass-subtle opacity-20"
        />

        {/* Decorative lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="hidden sm:block absolute top-[25%] left-0 w-[25%] h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="hidden sm:block absolute bottom-[30%] right-0 w-[20%] h-px bg-linear-to-l from-transparent via-accent/20 to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-px bg-primary"
            />
            <span className="text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-primary/80 font-medium">
              Global Digital Agency
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-[1.1] mb-5"
          >
            <span className="block text-gradient-subtle">WE CRAFT</span>
            <span className="block text-gradient my-1 sm:my-2">DIGITAL</span>
            <span className="block text-gradient-subtle">EXCELLENCE</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid lg:grid-cols-12 gap-6 mt-8"
          >
            <div className="lg:col-span-5">
              <p className="text-xs text-muted-foreground leading-relaxed max-w-md">
                End-to-end solutions for eCommerce, technology, cybersecurity, and business operations. Powered by
                innovation, delivered with excellence from Pakistan to the world.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:justify-end">
              <Link
                href="/contact"
                className="group relative px-5 py-2.5 rounded-xl overflow-hidden glass-card hover:glow-primary transition-all duration-500 animate-border-dance"
              >
                <span className="relative z-10 flex items-center gap-2 text-xs tracking-[0.1em] uppercase font-medium">
                  Start Your Project
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>

              <Link
                href="/services"
                className="group flex items-center gap-3 text-xs tracking-[0.1em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-300"
              >
                <span className="w-8 h-px bg-foreground/30 group-hover:bg-primary group-hover:w-12 transition-all duration-300" />
                Explore Services
              </Link>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
