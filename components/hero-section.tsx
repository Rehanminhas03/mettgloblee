"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Modern office workspace"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-1">
        <motion.div
          animate={{ y: [0, -40, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] glass-card rotate-12 opacity-40 sm:opacity-50 md:opacity-60"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] right-[8%] w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-xl sm:rounded-2xl md:rounded-[2.5rem] glass-card -rotate-6 opacity-30 sm:opacity-40 md:opacity-50"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 }}
          className="absolute top-[35%] right-[20%] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full glass-subtle opacity-20 sm:opacity-30 md:opacity-40"
        />

        {/* Decorative lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="hidden sm:block absolute top-[25%] left-0 w-[30%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="hidden sm:block absolute bottom-[30%] right-0 w-[25%] h-px bg-gradient-to-l from-transparent via-accent/20 to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-px bg-primary sm:w-[60px]"
            />
            <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-primary/80">Global Digital Agency</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-normal tracking-tight leading-[0.85] sm:leading-[0.85] mb-8 sm:mb-10 md:mb-12"
          >
            <span className="block text-gradient-subtle">WE CRAFT</span>
            <span className="block text-gradient my-2 sm:my-3 md:my-4">DIGITAL</span>
            <span className="block text-gradient-subtle">EXCELLENCE</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 mt-12 sm:mt-16 md:mt-20"
          >
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                End-to-end solutions for eCommerce, technology, cybersecurity, and business operations. Powered by
                innovation, delivered with excellence from Pakistan to the world.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:justify-end">
              <Link
                href="/contact"
                className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl overflow-hidden glass-card hover:glow-primary transition-all duration-700 animate-border-dance"
              >
                <span className="relative z-10 flex items-center justify-center sm:justify-start gap-3 sm:gap-4 text-xs sm:text-sm tracking-wider uppercase">
                  Start Your Project
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Link>

              <Link
                href="/services"
                className="group flex items-center gap-3 sm:gap-4 text-xs sm:text-sm tracking-wider uppercase text-foreground/60 hover:text-foreground transition-colors duration-500 w-full sm:w-auto justify-center sm:justify-start"
              >
                <span className="w-10 sm:w-12 h-px bg-foreground/30 group-hover:bg-primary group-hover:w-14 sm:group-hover:w-16 transition-all duration-500" />
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-16 sm:mt-24 md:mt-32"
          >
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "50+", label: "Global Clients" },
              { value: "24/7", label: "Support" },
              { value: "11", label: "Service Lines" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="group p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl glass-card hover:glow-border transition-all duration-700"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gradient mb-2 sm:mb-3 tracking-tight">{stat.value}</div>
                <div className="text-[10px] sm:text-xs tracking-wider uppercase text-muted-foreground leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
