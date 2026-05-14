"use client"

import { motion } from "framer-motion"
import type { ProcessStep } from "@/types"

interface ServiceProcessProps {
  sectionLabel?: string
  title: string
  highlightedTitle: string
  steps: ProcessStep[]
}

export function ServiceProcess({
  sectionLabel = "Our Process",
  title,
  highlightedTitle,
  steps,
}: ServiceProcessProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">{sectionLabel}</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-foreground/90">{title}</span> <span className="text-gradient">{highlightedTitle}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="p-8 rounded-2xl glass hover:glass-strong transition-all duration-500">
                <div className="text-4xl font-bold text-gradient mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-foreground/90 mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
