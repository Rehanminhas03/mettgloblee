"use client"

import type React from "react"
import { Navigation, Footer } from "@/components/layout"
import { AnimatedBackground } from "@/components/common"
import { Button, Input, Textarea, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui"
import { servicesList, budgetRanges } from "@/constants/services"
import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { toast } from "sonner"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 hours.",
        })
      } else {
        toast.error("Failed to send message", {
          description: data.error || "Please try again later.",
        })
      }
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 sm:w-10 bg-primary" />
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-primary/80">Contact Us</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[0.95] mb-4 sm:mb-6">
              <span className="text-foreground/90">Let&apos;s start</span>
              <br />
              <span className="text-gradient">a conversation</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
              Ready to transform your business? Get in touch with our team and let&apos;s discuss how we can help you
              achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {isSubmitted ? (
                <div className="p-6 sm:p-8 md:p-10 rounded-xl glass-strong text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">Thank you!</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-5 sm:p-6 md:p-8 rounded-xl glass-strong">
                  <h2 className="text-base sm:text-lg font-semibold mb-5">Send us a message</h2>

                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] sm:text-xs font-medium text-foreground/70 mb-1.5">Full Name *</label>
                        <Input
                          required
                          value={formState.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className="bg-white/5 border-white/10 focus:border-primary text-xs h-9"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] sm:text-xs font-medium text-foreground/70 mb-1.5">Email Address *</label>
                        <Input
                          required
                          type="email"
                          value={formState.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className="bg-white/5 border-white/10 focus:border-primary text-xs h-9"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] sm:text-xs font-medium text-foreground/70 mb-1.5">Company Name</label>
                        <Input
                          value={formState.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          className="bg-white/5 border-white/10 focus:border-primary text-xs h-9"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] sm:text-xs font-medium text-foreground/70 mb-1.5">Phone Number</label>
                        <Input
                          type="tel"
                          value={formState.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="bg-white/5 border-white/10 focus:border-primary text-xs h-9"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] sm:text-xs font-medium text-foreground/70 mb-1.5">
                          Service Interested In
                        </label>
                        <Select value={formState.service} onValueChange={(value) => handleChange("service", value)}>
                          <SelectTrigger className="bg-white/5 border-white/10 focus:border-primary text-xs h-9">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {servicesList.map((service) => (
                              <SelectItem key={service} value={service} className="text-xs">
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-[10px] sm:text-xs font-medium text-foreground/70 mb-1.5">Budget Range</label>
                        <Select value={formState.budget} onValueChange={(value) => handleChange("budget", value)}>
                          <SelectTrigger className="bg-white/5 border-white/10 focus:border-primary text-xs h-9">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range} className="text-xs">
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-medium text-foreground/70 mb-1.5">Project Details *</label>
                      <Textarea
                        required
                        value={formState.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="bg-white/5 border-white/10 focus:border-primary min-h-[100px] text-xs"
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground hover:glow-primary transition-all duration-500"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-3.5 h-3.5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <Send className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-5"
            >
              <div>
                <h2 className="text-base sm:text-lg font-semibold mb-3">Get in touch</h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Have a question or ready to start your project? Reach out to us through any of these channels and
                  we&apos;ll respond within 24 hours.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 rounded-xl glass hover:glass-strong transition-all duration-300">
                  <div className="p-2.5 rounded-lg glass-subtle">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-medium mb-0.5">Email</h3>
                    <a
                      href="mailto:hello@mettglobal.com"
                      className="text-[11px] sm:text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@mettglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl glass hover:glass-strong transition-all duration-300">
                  <div className="p-2.5 rounded-lg glass-subtle">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-medium mb-0.5">Phone / WhatsApp</h3>
                    <a href="tel:+923001234567" className="text-[11px] sm:text-xs text-muted-foreground hover:text-primary transition-colors">
                      +92 300 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl glass hover:glass-strong transition-all duration-300">
                  <div className="p-2.5 rounded-lg glass-subtle">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-medium mb-0.5">Headquarters</h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground">
                      Lahore, Pakistan
                      <br />
                      <span className="text-primary text-[10px]">Serving clients globally</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl glass hover:glass-strong transition-all duration-300">
                  <div className="p-2.5 rounded-lg glass-subtle">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-medium mb-0.5">Business Hours</h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground">
                      Monday - Friday: 9AM - 6PM PKT
                      <br />
                      <span className="text-primary text-[10px]">24/7 support available</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="p-5 sm:p-6 rounded-xl glass-strong">
                <h3 className="text-sm sm:text-base font-semibold mb-2">Quick Response Guarantee</h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground mb-4">
                  We pride ourselves on fast communication. Expect a response within 24 hours, often much sooner.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[9px] font-medium">
                      AK
                    </div>
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-[9px] font-medium">
                      SM
                    </div>
                    <div className="w-8 h-8 rounded-full bg-chart-3/20 flex items-center justify-center text-[9px] font-medium">
                      OR
                    </div>
                  </div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Our team is ready to help</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
