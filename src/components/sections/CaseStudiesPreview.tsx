"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const caseStudies = [
  {
    title: "PropertyHub Real Estate Platform",
    category: "Web Development",
    result: "Full-stack platform delivered",
    image: "/case-study-propertyhub.jpg",
    href: "/case-studies/1",
  },
  {
    title: "HammerPath AI Video Generator",
    category: "AI & Automation",
    result: "AI-powered web app launched",
    image: "/case-study-hammerpath.jpg",
    href: "/case-studies/2",
  },
  {
    title: "Yuaia Haircare AI Campaign",
    category: "AI & Automation",
    result: "90-day transformation video",
    image: "/case-study-yuaia.jpg",
    href: "/case-studies/3",
  },
]

export function CaseStudiesPreview() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[9px] tracking-[0.2em] uppercase text-primary/80 font-medium">Success Stories</span>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
              <span className="text-foreground/90">Featured</span> <span className="text-gradient">Case Studies</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="group flex items-center gap-2 text-[10px] text-foreground/60 hover:text-foreground transition-colors duration-300"
          >
            View All Case Studies
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <Link href={study.href} className="group block">
                <div className="rounded-xl overflow-hidden glass hover:glass-strong transition-all duration-300 hover:glow-primary">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/40 to-transparent" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 text-[9px] font-medium rounded-full glass-subtle">
                      {study.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-3">
                    <h3 className="text-xs font-semibold text-foreground/90 mb-0.5 group-hover:text-primary transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-[10px] text-primary font-medium">
                      {study.result}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
