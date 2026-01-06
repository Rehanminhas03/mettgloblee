"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const services = [
  "Amazon & eCommerce",
  "Web Development",
  "Cybersecurity Services",
  "Procurement & Manufacturing",
  "Supply Chain & Logistics",
  "B2B Lead Generation",
  "Branding & Marketing",
  "AI & Automation",
  "Customer Support",
  "IT Help Desk",
  "Data Entry & VA",
]

const budgetRanges = [
  "Less than $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
  "Ongoing Retainer",
]

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
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formState.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (formState.phone && !/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(formState.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formState.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
            alt="Contact and communication"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-mono text-primary tracking-wider uppercase">Contact Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
              <span className="text-foreground/90">Let&apos;s start</span>
              <br />
              <span className="text-gradient">a conversation</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              Ready to transform your business? Get in touch with our team and let&apos;s discuss how we can help you
              achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {isSubmitted ? (
                <div className="p-12 rounded-3xl glass-strong text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Thank you!</h3>
                  <p className="text-muted-foreground text-lg">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-3xl glass-strong">
                  <h2 className="text-2xl font-bold mb-8">Send us a message</h2>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground/70 mb-2">Full Name *</label>
                        <Input
                          required
                          value={formState.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className="bg-white/5 border-white/10 focus:border-primary"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground/70 mb-2">Email Address *</label>
                        <Input
                          required
                          type="email"
                          value={formState.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className="bg-white/5 border-white/10 focus:border-primary"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground/70 mb-2">Company Name</label>
                        <Input
                          value={formState.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          className="bg-white/5 border-white/10 focus:border-primary"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground/70 mb-2">Phone Number</label>
                        <Input
                          type="tel"
                          value={formState.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="bg-white/5 border-white/10 focus:border-primary"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground/70 mb-2">
                          Service Interested In
                        </label>
                        <Select value={formState.service} onValueChange={(value) => handleChange("service", value)}>
                          <SelectTrigger className="bg-white/5 border-white/10 focus:border-primary">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground/70 mb-2">Budget Range</label>
                        <Select value={formState.budget} onValueChange={(value) => handleChange("budget", value)}>
                          <SelectTrigger className="bg-white/5 border-white/10 focus:border-primary">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground/70 mb-2">Project Details *</label>
                      <Textarea
                        required
                        value={formState.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="bg-white/5 border-white/10 focus:border-primary min-h-[150px]"
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 text-lg font-semibold rounded-xl bg-primary text-primary-foreground hover:glow-primary transition-all duration-500"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <Send className="w-5 h-5" />
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
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Have a question or ready to start your project? Reach out to us through any of these channels and
                  we&apos;ll respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl glass hover:glass-strong transition-all duration-300">
                  <div className="p-3 rounded-xl glass-subtle">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:hello@mettglobal.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
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

              {/* Quick Response */}
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
