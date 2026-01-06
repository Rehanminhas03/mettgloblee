"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  {
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
  },
  {
    name: "GlobalRetail",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
  },
  {
    name: "SecureNet",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
  },
  {
    name: "InnovateCo",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
  },
  {
    name: "DataStream",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
  },
  {
    name: "CloudPeak",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
  },
]

export function TrustSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden border-y border-border">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&h=400&q=80"
          alt="Modern office"
          fill
          className="object-cover opacity-5"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider px-4">
            Trusted by brands across USA, UK, Europe, Australia, and Middle East
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-14"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 5, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ scale: 1.1, y: -3 }}
              className="group flex flex-col items-center gap-2 cursor-default"
            >
              <div className="px-6 py-3 rounded-xl glass-subtle group-hover:glass-strong group-hover:glow-primary transition-all duration-300">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground/30 group-hover:text-primary/80 transition-colors duration-300">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
