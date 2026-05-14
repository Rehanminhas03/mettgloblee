"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpRight,
  ShoppingCart,
  Code,
  Shield,
  Users,
  Palette,
  Brain,
} from "lucide-react"
import { Card3D } from "@/components/card-3d"

const services = [
  {
    number: "01",
    title: "Amazon & eCommerce",
    description: "Multi-channel eCommerce management",
    icon: ShoppingCart,
    href: "/services/ecommerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=600&q=80",
  },
  {
    number: "02",
    title: "Web Development",
    description: "Modern, scalable web applications",
    icon: Code,
    href: "/services/web-development",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&h=600&q=80",
  },
  {
    number: "03",
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions",
    icon: Shield,
    href: "/services/cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&h=600&q=80",
  },
  {
    number: "04",
    title: "Lead Generation",
    description: "Data-driven B2B pipelines",
    icon: Users,
    href: "/services/lead-generation",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&h=600&q=80",
  },
  {
    number: "05",
    title: "Branding",
    description: "Creative design & marketing",
    icon: Palette,
    href: "/services/branding",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&h=600&q=80",
  },
  {
    number: "06",
    title: "AI & Automation",
    description: "Intelligent workflows & chatbots",
    icon: Brain,
    href: "/services/ai-automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&h=600&q=80",
  },
]

export function ServicesSection() {
  return (
    <section className="relative py-20 sm:py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mb-24"
        >
          <div className="flex items-center gap-6 mb-8">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="h-px bg-primary"
            />
            <span className="text-xs tracking-[0.3em] uppercase text-primary/80">What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
            <span className="text-gradient-subtle">Our</span> <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        {/* Services List - 3 Cards Per Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.04,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="aspect-square p-2 sm:p-2.5 md:p-3"
            >
              <Link href={service.href} className="group block h-full w-full">
                <Card3D intensity={10} hoverLift={8} className="h-full w-full">
                  <div
                    className="h-full w-full p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl glass-card group-hover:glass-strong border border-border/30 group-hover:border-primary/60 group-hover:glow-primary transition-all duration-500 relative overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20"
                  >
                  {/* Service-themed background image */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover opacity-30 group-hover:opacity-55 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/55 to-background/40 group-hover:from-background/55 group-hover:via-background/40 group-hover:to-background/30 transition-all duration-500" />
                  </div>

                  {/* Animated background gradient on hover */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/15 to-primary/10 rounded-2xl sm:rounded-3xl"
                  />

                  {/* Animated border glow effect */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ opacity: 1, scale: 1.15 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute -inset-3 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-2xl -z-10"
                  />

                  {/* Shimmer effect */}
                  <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    whileHover={{ 
                      x: "100%", 
                      opacity: [0, 1, 0],
                      transition: { 
                        duration: 1, 
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 1.5
                      }
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -z-0"
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    {/* Top Section - Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ 
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.15
                        }}
                        transition={{ 
                          duration: 0.5,
                          ease: "easeInOut"
                        }}
                        className="p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl glass-subtle group-hover:bg-primary/20 group-hover:glow-primary transition-all duration-300"
                      >
                        <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                      </motion.div>
                      
                      {/* Arrow indicator */}
                      <motion.div
                        initial={{ opacity: 0, x: -10, y: 10 }}
                        whileHover={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-2 rounded-lg glass-subtle group-hover:bg-primary/10"
                      >
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                      </motion.div>
                    </div>

                    {/* Middle Section - Title & Description */}
                    <div className="flex-1 flex flex-col justify-center">
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.04 + 0.15 }}
                        className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-foreground/90 group-hover:text-primary mb-2 sm:mb-3 transition-colors duration-300 leading-tight"
                      >
                        {service.title}
                      </motion.h3>
                      
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.04 + 0.25 }}
                        className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300 leading-relaxed line-clamp-3"
                      >
                        {service.description}
                      </motion.p>
                    </div>

                    {/* Bottom Section - Learn More */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.04 + 0.35 }}
                      className="flex items-center gap-2 mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-border/30 group-hover:border-primary/40 transition-colors duration-300"
                    >
                      <span className="text-[10px] sm:text-xs tracking-wider uppercase text-primary/60 group-hover:text-primary font-medium transition-colors duration-300">
                        Learn More
                      </span>
                      <motion.div
                        whileHover={{ x: 4, y: -4, rotate: 45 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Decorative corner gradient */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -45 }}
                    whileHover={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary/15 to-transparent rounded-bl-full"
                  />
                  </div>
                </Card3D>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="mt-12 sm:mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-[10px] sm:text-xs tracking-[0.2em] uppercase rounded-xl sm:rounded-2xl glass-card hover:glow-primary transition-all duration-300"
            >
              View All Services
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
