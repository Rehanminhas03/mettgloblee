"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { servicesData } from "@/constants/services"

export function ServicesSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-px bg-primary"
            />
            <span className="text-[9px] tracking-[0.2em] uppercase text-primary/80 font-medium">What We Do</span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
            <span className="text-gradient-subtle">Our</span> <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        {/* Services List - Grid with Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
            >
              <Link href={service.href} className="group block">
                <div className="rounded-xl glass-card group-hover:glass-strong border border-border/30 group-hover:border-primary/50 group-hover:glow-primary transition-all duration-300 overflow-hidden">
                  {/* Image Section */}
                  <div className="relative h-24 sm:h-28 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
                    <div className="absolute top-2 left-2 p-1.5 sm:p-2 rounded-lg glass-subtle group-hover:bg-primary/20 transition-all duration-300">
                      <service.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    </div>
                    <div className="absolute top-2 right-2">
                      <ArrowUpRight className="w-3 h-3 text-primary/40 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-3 sm:p-4">
                    <h3 className="text-xs sm:text-sm font-semibold tracking-tight text-foreground/90 group-hover:text-primary mb-1 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-muted-foreground group-hover:text-foreground/60 transition-colors duration-300 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>

                    {/* Learn More */}
                    <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-border/20 group-hover:border-primary/30 transition-colors duration-300">
                      <span className="text-[9px] tracking-wider uppercase text-primary/50 group-hover:text-primary font-medium transition-colors duration-300">
                        Learn More
                      </span>
                      <ArrowUpRight className="w-3 h-3 text-primary/50 group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 px-4 py-2 text-[10px] tracking-[0.15em] uppercase rounded-lg glass-card hover:glow-primary transition-all duration-300"
          >
            View All Services
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
