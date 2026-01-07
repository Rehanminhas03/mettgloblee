"use client"

import { motion } from "framer-motion"
import type { FAQ } from "@/types"

interface ServiceFAQProps {
  sectionLabel?: string
  title: string
  highlightedTitle: string
  faqs: FAQ[]
}

export function ServiceFAQ({ sectionLabel = "FAQ", title, highlightedTitle, faqs }: ServiceFAQProps) {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
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

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl glass hover:glass-strong transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-foreground/90 mb-3">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
