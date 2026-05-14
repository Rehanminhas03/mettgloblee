"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
        <p className="text-muted-foreground leading-relaxed">
          Have a question or ready to start your project? Reach out to us through any of these channels and we&apos;ll
          respond within 24 hours.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4 p-6 rounded-2xl glass hover:glass-strong transition-all duration-300">
          <div className="p-3 rounded-xl glass-subtle">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <a href="mailto:hello@mettglobal.com" className="text-muted-foreground hover:text-primary transition-colors">
              hello@mettglobal.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 p-6 rounded-2xl glass hover:glass-strong transition-all duration-300">
          <div className="p-3 rounded-xl glass-subtle">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Phone / WhatsApp</h3>
            <a href="tel:+923001234567" className="text-muted-foreground hover:text-primary transition-colors">
              +92 300 123 4567
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 p-6 rounded-2xl glass hover:glass-strong transition-all duration-300">
          <div className="p-3 rounded-xl glass-subtle">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Headquarters</h3>
            <p className="text-muted-foreground">
              Lahore, Pakistan
              <br />
              <span className="text-primary text-sm">Serving clients globally</span>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-6 rounded-2xl glass hover:glass-strong transition-all duration-300">
          <div className="p-3 rounded-xl glass-subtle">
            <Clock className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Business Hours</h3>
            <p className="text-muted-foreground">
              Monday - Friday: 9AM - 6PM PKT
              <br />
              <span className="text-primary text-sm">24/7 support available</span>
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-2xl glass-strong">
        <h3 className="text-xl font-bold mb-4">Quick Response Guarantee</h3>
        <p className="text-muted-foreground mb-6">
          We pride ourselves on fast communication. Expect a response within 24 hours, often much sooner.
        </p>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">
              AK
            </div>
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold">
              SM
            </div>
            <div className="w-10 h-10 rounded-full bg-chart-3/20 flex items-center justify-center text-xs font-bold">
              OR
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Our team is ready to help</p>
        </div>
      </div>
    </motion.div>
  )
}
