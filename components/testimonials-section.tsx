"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    content:
      "Mett Global transformed our entire eCommerce operation. Their expertise in Amazon marketplace optimization resulted in a 320% revenue increase within just 6 months. The team's dedication and strategic approach exceeded all our expectations.",
    rating: 5,
    service: "Amazon & eCommerce",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "SecureFinance Ltd.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    content:
      "The cybersecurity audit and implementation by Mett Global was exceptional. They identified vulnerabilities we didn't know existed and implemented robust security measures. Zero security incidents since working with them.",
    rating: 5,
    service: "Cybersecurity",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Operations Director",
    company: "Global Retail Co.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    content:
      "Their supply chain optimization saved us over $2M annually. The team's understanding of logistics and their innovative AI-driven solutions streamlined our entire operation. Highly recommend their services!",
    rating: 5,
    service: "Supply Chain & Logistics",
  },
  {
    id: 4,
    name: "David Park",
    role: "Founder",
    company: "InnovateTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    content:
      "The web development team at Mett Global built us a stunning, high-performance platform that handles 10x our previous traffic. Their Next.js expertise and attention to detail is unmatched.",
    rating: 5,
    service: "Web Development",
  },
  {
    id: 5,
    name: "Amanda Foster",
    role: "Marketing VP",
    company: "BrandWave Agency",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
    content:
      "Mett Global's branding and marketing strategy completely revitalized our brand. The AI-powered campaigns they created generated over 1 million impressions in the first month alone.",
    rating: 5,
    service: "Branding & Marketing",
  },
  {
    id: 6,
    name: "Robert Thompson",
    role: "Managing Director",
    company: "Enterprise Solutions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80",
    content:
      "The AI automation solutions implemented by Mett Global reduced our manual processes by 75%. Their chatbot handles thousands of customer queries daily with incredible accuracy.",
    rating: 5,
    service: "AI & Automation",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">Testimonials</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-foreground/90">What our</span> <span className="text-gradient">clients say</span>
          </h2>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative p-8 sm:p-12 rounded-3xl glass-strong">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />

            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8">
                "{testimonials[activeIndex].content}"
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                  <span className="text-xs text-primary">{testimonials[activeIndex].service}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-primary w-8"
                  : "bg-foreground/20 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
                index === activeIndex
                  ? "glass-strong ring-2 ring-primary/50"
                  : "glass hover:glass-strong"
              }`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-medium text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
