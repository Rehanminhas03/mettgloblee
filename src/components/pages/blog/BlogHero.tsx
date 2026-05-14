"use client"

import { motion } from "framer-motion"

export function BlogHero() {
  return (
    <section className="relative pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 sm:w-10 bg-primary" />
            <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-primary/80">Blog & Insights</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[0.95] mb-4 sm:mb-6">
            <span className="text-foreground/90">Expert insights</span>
            <br />
            <span className="text-gradient">& industry trends</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
            Stay ahead with the latest insights on eCommerce, technology, cybersecurity, AI, and business growth
            strategies.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
