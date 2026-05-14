"use client"

import { motion } from "framer-motion"

const industries = [
  "Retail & eCommerce",
  "Manufacturing & Textiles",
  "Wholesale & Distribution",
  "Technology & SaaS",
  "Startups & Emerging Brands",
  "Healthcare",
  "Finance & Banking",
  "Real Estate",
]

export function IndustriesSection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">Industries</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-foreground/90">We serve</span> <span className="text-gradient">diverse sectors</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {industries.map((industry, index) => (
            <motion.span
              key={industry}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full glass hover:glass-strong hover:glow-primary cursor-default transition-all duration-300 text-xs sm:text-sm md:text-base font-medium"
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
