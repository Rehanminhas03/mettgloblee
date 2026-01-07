"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, TrendingUp } from "lucide-react"

interface Metric {
  label: string
  value: string
}

interface CaseStudy {
  id: number
  title: string
  category: string
  result: string
  description: string
  image: string
  metrics: Metric[]
}

interface CaseStudyCardProps {
  study: CaseStudy
  index: number
}

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      layout
    >
      <Link href={`/case-studies/${study.id}`} className="group block">
        <div className="rounded-xl overflow-hidden glass hover:glass-strong transition-all duration-500 hover:glow-primary">
          <div className="relative h-44 sm:h-52 overflow-hidden">
            <img
              src={study.image || "/placeholder.svg"}
              alt={study.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="px-2 py-0.5 text-[9px] font-medium rounded-full glass-subtle">{study.category}</span>
            </div>
            <div className="absolute bottom-3 right-3">
              <div className="p-2 rounded-full glass-strong group-hover:bg-primary/20 transition-all duration-300">
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-primary mb-2">
              <TrendingUp className="w-3 h-3" />
              {study.result}
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-foreground/90 mb-2 group-hover:text-primary transition-colors">
              {study.title}
            </h3>
            <p className="text-[11px] sm:text-xs text-muted-foreground mb-4">{study.description}</p>

            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
              {study.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-sm sm:text-base font-semibold text-gradient">{metric.value}</div>
                  <div className="text-[9px] sm:text-[10px] text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
