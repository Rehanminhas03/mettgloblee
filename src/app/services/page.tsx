"use client"

import { Navigation, Footer } from "@/components/layout"
import { AnimatedBackground } from "@/components/common"
import { servicesData } from "@/constants/services"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-[120px]" />
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
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-primary/80">Our Services</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[0.95] mb-4 sm:mb-6">
              <span className="text-foreground/90">Comprehensive</span>
              <br />
              <span className="text-gradient">Digital Solutions</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
              From eCommerce to cybersecurity, we offer end-to-end solutions tailored to your business needs. Explore
              our full range of services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Link href={service.href} className="group block h-full">
                  <div className="h-full p-4 sm:p-5 md:p-6 rounded-xl glass hover:glass-strong transition-all duration-500 hover:glow-border">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2.5 sm:p-3 rounded-lg glass-subtle group-hover:bg-primary/10 transition-colors">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-2xl sm:text-3xl font-bold text-foreground/10 group-hover:text-primary/20 transition-colors">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground/90 mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-primary/60 group-hover:text-primary transition-colors">
                      <span>Learn More</span>
                      <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
