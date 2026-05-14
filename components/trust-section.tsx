"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  { name: "Hyundai", logo: "/logo/hyundai.png" },
  { name: "Geely", logo: "/logo/geely.png" },
  { name: "Jetour", logo: "/logo/jetour.png" },
  { name: "TELUS International", logo: "/logo/telus.png" },
  { name: "RDX Sports", logo: "/logo/rdx.png" },
  { name: "OGDCL", logo: "/logo/ogdcl.png" },
  { name: "Ittehad Steel", logo: "/logo/ittehad%20steel.png" },
  { name: "Eastern Highway", logo: "/logo/eastern_higway.png" },
]

const marqueeClients = [...clients, ...clients]

export function TrustSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden border-y border-border">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background via-background/95 to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider px-4">
            Trusted by leading brands across USA, UK, Europe, Australia, and the Middle East
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-8 sm:gap-12 md:gap-16 w-max items-center">
          {marqueeClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group flex items-center justify-center px-6 sm:px-8 py-4 sm:py-5 md:py-6 rounded-xl glass-subtle hover:glass-strong hover:glow-primary transition-all duration-300 cursor-default flex-shrink-0 h-24 sm:h-28 md:h-32"
              title={client.name}
            >
              <div className="relative w-32 sm:w-40 md:w-44 h-14 sm:h-16 md:h-20">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 176px"
                  className="object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
