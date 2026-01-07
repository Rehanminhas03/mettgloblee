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
    <section className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-[9px] tracking-[0.2em] uppercase text-primary/80 font-medium">Industries</span>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
            <span className="text-foreground/90">We serve</span> <span className="text-gradient">diverse sectors</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {industries.map((industry, index) => (
            <motion.span
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-2.5 py-1 rounded-full glass hover:glass-strong hover:glow-primary cursor-default transition-all duration-300 text-[10px] font-medium"
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
