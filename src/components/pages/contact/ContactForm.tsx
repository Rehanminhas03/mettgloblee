"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import { Button, Input, Textarea, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui"
import { servicesList, budgetRanges } from "@/constants/services"

export function ContactForm() {
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
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="p-12 rounded-3xl glass-strong text-center">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-3xl font-bold mb-4">Thank you!</h3>
        <p className="text-muted-foreground text-lg">
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit}
      className="p-8 md:p-12 rounded-3xl glass-strong"
    >
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
            <label className="block text-sm font-medium text-foreground/70 mb-2">Service Interested In</label>
            <Select value={formState.service} onValueChange={(value) => handleChange("service", value)}>
              <SelectTrigger className="bg-white/5 border-white/10 focus:border-primary">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {servicesList.map((service) => (
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
    </motion.form>
  )
}
