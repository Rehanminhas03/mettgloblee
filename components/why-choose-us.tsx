"use client"

import { motion } from "framer-motion"
import { Globe, Layers, BarChart3, CheckCircle } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Globe,
    title: "Global Network",
    description: "Operating from Pakistan with international reach across USA, UK, Europe, Australia, and Middle East.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: Layers,
    title: "Multi-Channel Expertise",
    description: "Deep expertise across Amazon, Walmart, Shopify, eBay, and every major eCommerce platform.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: BarChart3,
    title: "Data & AI Driven",
    description: "Advanced analytics and AI automation at the core of everything we do.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Solutions",
    description: "From strategy to execution, we handle every aspect of your digital transformation.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=400&q=80",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[350px] md:w-[400px] h-[300px] sm:h-[350px] md:h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">Why Choose Us</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight max-w-4xl mx-auto">
            <span className="text-foreground/90">Built for</span> <span className="text-gradient">global success</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl glass hover:glass-strong transition-all duration-300 hover:glow-primary"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/70" />
              </div>

              <div className="relative z-10 p-6 sm:p-8">
                <div className="flex items-start gap-4 sm:gap-6">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-subtle group-hover:bg-primary/10 group-hover:glow-primary transition-all duration-300 flex-shrink-0"
                  >
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 + 0.1, ease: [0.4, 0, 0.2, 1] }}
                      className="text-lg sm:text-xl md:text-2xl font-bold text-foreground/90 mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300"
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 + 0.15, ease: [0.4, 0, 0.2, 1] }}
                      className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300"
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
