"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

interface ServiceBenefitsProps {
  sectionLabel?: string
  title: string
  highlightedTitle: string
  benefits: string[]
  highlightValue: string
  highlightLabel: string
  highlightDescription: string
}

export function ServiceBenefits({
  sectionLabel = "Why Choose Us",
  title,
  highlightedTitle,
  benefits,
  highlightValue,
  highlightLabel,
  highlightDescription,
}: ServiceBenefitsProps) {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-mono text-primary tracking-wider uppercase">{sectionLabel}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              <span className="text-gradient">{title}</span> <span className="text-foreground/90">{highlightedTitle}</span>
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground/90">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 rounded-3xl glass-strong"
          >
            <div className="text-6xl font-bold text-gradient mb-4">{highlightValue}</div>
            <p className="text-xl text-foreground/90 mb-6">{highlightLabel}</p>
            <p className="text-muted-foreground leading-relaxed">{highlightDescription}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
