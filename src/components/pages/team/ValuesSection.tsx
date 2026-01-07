"use client"

import { motion } from "framer-motion"

interface Value {
  title: string
  description: string
}

interface ValuesSectionProps {
  values: Value[]
}

export function ValuesSection({ values }: ValuesSectionProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-primary" />
            <span className="text-[9px] tracking-[0.2em] uppercase text-primary/80 font-medium">What Drives Us</span>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
            <span className="text-gradient-subtle">Our</span> <span className="text-gradient">Values</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl glass-card hover:glow-border transition-all duration-500 text-center"
            >
              <h3 className="text-sm font-semibold tracking-wide text-gradient mb-2">{value.title}</h3>
              <p className="text-xs text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
