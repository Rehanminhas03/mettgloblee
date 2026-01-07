"use client"

import { motion } from "framer-motion"

const clients = ["TechCorp", "GlobalRetail", "SecureNet", "InnovateCo", "DataStream", "CloudPeak"]

export function TrustSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden border-y border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider px-4">
            Trusted by brands across USA, UK, Europe, Australia, and Middle East
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 5, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ scale: 1.08, y: -3 }}
              className="text-lg sm:text-xl md:text-2xl font-bold text-foreground/20 hover:text-primary/60 transition-colors duration-300 cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
