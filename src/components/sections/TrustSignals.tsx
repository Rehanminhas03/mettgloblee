"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Building2, Users, Globe, Award, ChevronLeft, ChevronRight } from "lucide-react"

const stats = [
  { icon: Building2, value: 50, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 30, suffix: "+", label: "Happy Clients" },
  { icon: Globe, value: 12, suffix: "+", label: "Countries Served" },
  { icon: Award, value: 100, suffix: "%", label: "Client Satisfaction" },
]


const testimonials = [
  {
    quote: "METT Global delivered exactly what we envisioned. The platform is professional, fast, and our lead capture has improved dramatically.",
    author: "Property Manager",
    company: "PropertyHub",
  },
  {
    quote: "The AI video generation platform exceeded our expectations. Complex technology made accessible through an intuitive interface.",
    author: "Founder",
    company: "HammerPath",
  },
  {
    quote: "Their understanding of our brand and the 90-day storytelling approach perfectly captured what we needed for the EU market.",
    author: "Brand Director",
    company: "Yuaia Haircare",
  },
  {
    quote: "The AI content workflow transformed our production capacity while maintaining the quality our clients expect.",
    author: "Creative Director",
    company: "Cobra Production",
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">
      {count}{suffix}
    </span>
  )
}

export function TrustSignals() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary/80 font-medium">Trusted Worldwide</span>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            <span className="text-foreground/90">Delivering</span>{" "}
            <span className="text-gradient">Excellence</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl glass hover:glass-strong transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-6 sm:p-8 rounded-xl glass-strong">
            {/* Quote Icon */}
            <div className="absolute top-4 left-4 text-5xl text-primary/20 font-serif">&ldquo;</div>

            {/* Testimonial Content */}
            <div className="relative pt-6">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-base sm:text-lg text-foreground/90 mb-6 leading-relaxed italic">
                  &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">{testimonials[currentTestimonial].author}</p>
                    <p className="text-sm text-primary">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-end gap-2 mt-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-lg glass hover:glass-strong transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial ? "bg-primary w-4" : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-lg glass hover:glass-strong transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
