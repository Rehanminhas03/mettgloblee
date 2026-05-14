"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ServicePageHeroProps {
  title: string
  highlightedTitle: string
  description: string
  ctaText?: string
  ctaHref?: string
}

export function ServicePageHero({
  title,
  highlightedTitle,
  description,
  ctaText = "Get Started Today",
  ctaHref = "/contact",
}: ServicePageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
            <span className="text-foreground/90">{title}</span>
            <br />
            <span className="text-gradient">{highlightedTitle}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-12">{description}</p>
          <Link
            href={ctaHref}
            className="group inline-flex items-center gap-4 px-10 py-5 text-sm tracking-wider uppercase rounded-2xl glass-card hover:glow-primary transition-all duration-700"
          >
            {ctaText}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
