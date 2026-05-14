"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const industries = [
  {
    name: "Retail & eCommerce",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    name: "AI Video Production",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    name: "E-books & Publishing",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    name: "Technology & SaaS",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    name: "Startups & Emerging Brands",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    name: "E-Learning & Education",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    name: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    name: "Audiobook & Media",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=400&h=300&q=80",
  },
]

export function IndustriesSection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Modern cityscape"
          fill
          className="object-cover opacity-5"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">Industries</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-foreground/90">We serve</span> <span className="text-gradient">diverse sectors</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/3] cursor-default"
            >
              {/* Background Image */}
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30 group-hover:from-primary/90 group-hover:via-primary/50 group-hover:to-primary/20 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex items-end p-4 sm:p-5">
                <span className="text-sm sm:text-base font-semibold text-foreground/90 group-hover:text-white transition-colors duration-300">
                  {industry.name}
                </span>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl ring-2 ring-primary/50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
