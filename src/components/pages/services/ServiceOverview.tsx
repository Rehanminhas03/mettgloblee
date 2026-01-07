"use client"

import { motion } from "framer-motion"
import type { StatItem } from "@/types"

interface ServiceOverviewProps {
  title: string
  highlightedTitle: string
  description: string
  additionalDescription?: string
  stats: StatItem[]
}

export function ServiceOverview({
  title,
  highlightedTitle,
  description,
  additionalDescription,
  stats,
}: ServiceOverviewProps) {
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
              <span className="text-sm font-mono text-primary tracking-wider uppercase">Overview</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-foreground/90">{title}</span> <span className="text-gradient">{highlightedTitle}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{description}</p>
            {additionalDescription && (
              <p className="text-lg text-muted-foreground leading-relaxed">{additionalDescription}</p>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl glass-card">
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
