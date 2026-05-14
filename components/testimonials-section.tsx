"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Bilal Ahmed Khan",
    role: "Head of Digital",
    company: "Hyundai Nishat Motor",
    location: "Lahore",
    initials: "BK",
    color: "from-cyan-500/30 to-blue-500/30",
    content:
      "The team delivered our dealer-locator and test-drive booking platform in 10 weeks. Inbound test-drive requests are up roughly 45% quarter-on-quarter, and the handover to our internal IT was clean and well-documented.",
    rating: 5,
    service: "Web Development",
  },
  {
    id: 2,
    name: "Faisal Mahmood",
    role: "eCommerce Manager",
    company: "RDX Sports",
    location: "Sialkot",
    initials: "FM",
    color: "from-emerald-500/30 to-teal-500/30",
    content:
      "We engaged Mett to manage our US and UK Amazon storefronts. Listing rework and PPC restructuring brought ACoS from 38% down to 22% over six months, and Buy Box share is now consistently above 85%.",
    rating: 5,
    service: "Amazon & eCommerce",
  },
  {
    id: 3,
    name: "Ayesha Tariq",
    role: "Marketing Lead",
    company: "Geely Pakistan",
    location: "Karachi",
    initials: "AT",
    color: "from-purple-500/30 to-pink-500/30",
    content:
      "Their creative team ran our Coolray launch campaign. Lead-form completions across our landing pages grew about 60%, and the social content cadence they set up is something our in-house team has been able to maintain.",
    rating: 5,
    service: "Branding & Marketing",
  },
  {
    id: 4,
    name: "Hassan Raza",
    role: "IT Security Manager",
    company: "OGDCL",
    location: "Islamabad",
    initials: "HR",
    color: "from-indigo-500/30 to-violet-500/30",
    content:
      "Mett conducted a comprehensive infrastructure audit and helped remediate findings against our compliance baseline. Their reporting was thorough and the engagement was handled with the discretion this kind of work requires.",
    rating: 5,
    service: "Cybersecurity",
  },
  {
    id: 5,
    name: "Usman Sheikh",
    role: "Operations Director",
    company: "Ittehad Steel Industries",
    location: "Lahore",
    initials: "US",
    color: "from-orange-500/30 to-red-500/30",
    content:
      "We automated three of our procurement workflows with their team. Manual data entry on those flows dropped by about half, and our purchase-cycle time is noticeably shorter. The ERP integration was the part we were most worried about, and it held up.",
    rating: 5,
    service: "AI & Automation",
  },
  {
    id: 6,
    name: "Sana Iqbal",
    role: "Co-Founder",
    company: "Emaago",
    location: "Karachi",
    initials: "SI",
    color: "from-yellow-500/30 to-amber-500/30",
    content:
      "As a small D2C team we needed partners, not vendors — and that's what we got. Our Shopify build went live on time, and the team kept iterating with us through the first launch quarter. Genuinely founder-friendly.",
    rating: 5,
    service: "Web Development & Branding",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = testimonials[activeIndex]

  return (
    <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
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

        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative p-8 sm:p-12 rounded-3xl glass-strong">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />

            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8">
                "{active.content}"
              </p>

              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${active.color} flex items-center justify-center text-foreground font-semibold ring-2 ring-primary/20`}
                >
                  {active.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{active.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {active.role}, {active.company} · {active.location}
                  </p>
                  <span className="text-xs text-primary">{active.service}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-primary w-8" : "w-3 bg-foreground/20 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
                index === activeIndex ? "glass-strong ring-2 ring-primary/50" : "glass hover:glass-strong"
              }`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-sm text-muted-foreground line-clamp-3 mb-4">"{testimonial.content}"</p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-foreground text-xs font-semibold`}
                >
                  {testimonial.initials}
                </div>
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
