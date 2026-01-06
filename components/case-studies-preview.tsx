"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const caseStudies = [
  {
    title: "E-commerce Revenue Boost",
    category: "Amazon & eCommerce",
    result: "320% revenue increase in 6 months",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=600&q=80",
    href: "/case-studies/ecommerce-revenue",
  },
  {
    title: "Secure Infrastructure Overhaul",
    category: "Cybersecurity",
    result: "Zero security incidents post-implementation",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=600&q=80",
    href: "/case-studies/security-overhaul",
  },
  {
    title: "AI-Powered Automation",
    category: "AI & Automation",
    result: "75% reduction in manual processes",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=600&q=80",
    href: "/case-studies/ai-automation",
  },
]

export function CaseStudiesPreview() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-mono text-primary tracking-wider uppercase">Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-foreground/90">Featured</span> <span className="text-gradient">Case Studies</span>
            </h2>
          </div>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/case-studies"
              className="group flex items-center gap-2 text-sm sm:text-base text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              View All Case Studies
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Link href={study.href} className="group block">
                <div className="rounded-3xl overflow-hidden glass hover:glass-strong transition-all duration-500 hover:glow-primary">
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <motion.img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent transition-opacity duration-300"
                    />
                    <motion.span
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 + 0.1, ease: [0.4, 0, 0.2, 1] }}
                      whileHover={{ scale: 1.05 }}
                      className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-mono rounded-full glass-subtle group-hover:glass hover:glow-primary transition-all duration-300"
                    >
                      {study.category}
                    </motion.span>
                  </div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.15, ease: [0.4, 0, 0.2, 1] }}
                    className="p-4 sm:p-6"
                  >
                    <motion.h3
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="text-lg sm:text-xl font-bold text-foreground/90 mb-2 group-hover:text-primary transition-colors duration-300"
                    >
                      {study.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                      className="text-xs sm:text-sm text-primary font-medium group-hover:text-primary/80 transition-colors duration-300"
                    >
                      {study.result}
                    </motion.p>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
