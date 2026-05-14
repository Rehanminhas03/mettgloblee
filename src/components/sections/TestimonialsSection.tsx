"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Michael Chen",
    role: "CEO, TechVentures Inc.",
    company: "TechVentures",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    quote: "METT Global transformed our entire e-commerce operation. Their Amazon expertise helped us scale from $50K to $2M in monthly revenue within 18 months.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "CTO, SecureFlow",
    company: "SecureFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    quote: "The cybersecurity team at METT is exceptional. They identified critical vulnerabilities we had missed and implemented robust security protocols that gave us peace of mind.",
    rating: 5,
  },
  {
    name: "David Williams",
    role: "Founder, GlobalRetail Co.",
    company: "GlobalRetail",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
    quote: "Their web development team delivered a platform that exceeded our expectations. Fast, responsive, and beautifully designed. Our conversion rate increased by 340%.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "VP Operations, LogiTech",
    company: "LogiTech",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
    quote: "METT's supply chain solutions revolutionized our logistics. We reduced costs by 40% while improving delivery times. Their team truly understands global operations.",
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "Marketing Director, BrandX",
    company: "BrandX",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
    quote: "The branding and marketing strategy METT developed for us was phenomenal. Our brand recognition skyrocketed and we saw a 200% increase in qualified leads.",
    rating: 5,
  },
  {
    name: "Amanda Lee",
    role: "COO, DataDriven Solutions",
    company: "DataDriven",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80",
    quote: "Their AI automation solutions saved us thousands of hours in manual work. The chatbot they built handles 80% of our customer inquiries flawlessly.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-px bg-primary"
            />
            <span className="text-[9px] tracking-[0.2em] uppercase text-primary/80 font-medium">Testimonials</span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-px bg-primary"
            />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
            <span className="text-gradient-subtle">What Our</span> <span className="text-gradient">Clients Say</span>
          </h2>
        </motion.div>
      </div>

      {/* Scrolling Testimonials */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex"
        >
          <motion.div
            animate={{
              x: [0, -400 * testimonials.length],
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
            className="flex gap-4 sm:gap-6"
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="shrink-0 w-[320px] sm:w-[380px] p-5 sm:p-6 rounded-xl glass-card border border-border/30 hover:border-primary/30 transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-6 h-6 text-primary/30" />
                </div>

                {/* Quote Text */}
                <p className="text-[11px] sm:text-xs text-foreground/80 leading-relaxed mb-5 line-clamp-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Rating */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover border border-border/50"
                  />
                  <div>
                    <h4 className="text-xs font-semibold text-foreground/90">{testimonial.name}</h4>
                    <p className="text-[10px] text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
