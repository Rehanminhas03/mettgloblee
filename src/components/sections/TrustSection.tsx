"use client"

import { motion } from "framer-motion"

const clients = [
  "Hyundai",
  "Geely",
  "Jetour",
  "TELUS International",
  "RDX Sports",
  "OGDCL",
  "Ittehad Steel",
  "Eastern Highway",
  "Rabi Traders",
  "Emaago",
  "TechCorp",
  "GlobalRetail",
  "SecureNet",
  "InnovateCo",
  "DataStream",
  "CloudPeak",
]

export function TrustSection() {
  // Duplicate the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients]

  return (
    <section className="relative py-8 sm:py-10 overflow-hidden">
      <div className="mx-auto" style={{ width: '65%' }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6"
        >
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em]">
            Trusted by brands across USA, UK, Europe, Australia, and Middle East
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{
                x: [0, -80 * clients.length],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                },
              }}
              className="flex items-center gap-10 sm:gap-14 whitespace-nowrap"
            >
              {duplicatedClients.map((client, index) => (
                <motion.span
                  key={`${client}-${index}`}
                  className="shrink-0 text-base sm:text-lg font-semibold text-foreground/25 hover:text-foreground/50 transition-colors duration-300 cursor-default"
                >
                  {client}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
