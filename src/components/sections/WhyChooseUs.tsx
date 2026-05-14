"use client"

import { motion } from "framer-motion"
import { Globe, Layers, BarChart3, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Global Network",
    description: "Operating from Pakistan with international reach across USA, UK, Europe, Australia, and Middle East.",
  },
  {
    icon: Layers,
    title: "Multi-Channel Expertise",
    description: "Deep expertise across Amazon, Walmart, Shopify, eBay, and every major eCommerce platform.",
  },
  {
    icon: BarChart3,
    title: "Data & AI Driven",
    description: "Advanced analytics and AI automation at the core of everything we do.",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Solutions",
    description: "From strategy to execution, we handle every aspect of your digital transformation.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-[9px] tracking-[0.2em] uppercase text-primary/80 font-medium">Why Choose Us</span>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight max-w-3xl mx-auto">
            <span className="text-foreground/90">Built for</span> <span className="text-gradient">global success</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -3 }}
              className="group p-5 rounded-xl glass hover:glass-strong transition-all duration-300 hover:glow-primary"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg glass-subtle group-hover:bg-primary/10 transition-all duration-300 shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-semibold text-foreground/90 mb-1 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
