"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpRight,
  ShoppingCart,
  Code,
  Shield,
  Factory,
  Truck,
  Users,
  Palette,
  Brain,
  Headphones,
  Monitor,
  FileText,
} from "lucide-react"

const services = [
  {
    number: "01",
    title: "Amazon & eCommerce",
    description:
      "Multi-channel eCommerce management, marketplace optimization, inventory management, and growth strategies across Amazon, Walmart, Shopify, eBay, and more.",
    icon: ShoppingCart,
    href: "/services/ecommerce",
    features: ["Marketplace Management", "Product Listing Optimization", "PPC Advertising", "Inventory Management"],
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Modern, scalable, high-performance websites and applications built with cutting-edge technologies. From simple landing pages to complex enterprise solutions.",
    icon: Code,
    href: "/services/web-development",
    features: ["Custom Web Apps", "E-commerce Platforms", "API Development", "Performance Optimization"],
  },
  {
    number: "03",
    title: "Cybersecurity Services",
    description:
      "Enterprise-grade security solutions including penetration testing, security audits, incident response, and compliance management.",
    icon: Shield,
    href: "/services/cybersecurity",
    features: ["Penetration Testing", "Security Audits", "Compliance", "Incident Response"],
  },
  {
    number: "04",
    title: "Procurement & Manufacturing",
    description:
      "Global sourcing from Pakistan's manufacturing hubs. Textile sourcing, quality control, vendor management, and supply chain optimization.",
    icon: Factory,
    href: "/services/procurement",
    features: ["Vendor Sourcing", "Quality Control", "Cost Negotiation", "Supply Chain Management"],
  },
  {
    number: "05",
    title: "Supply Chain & Logistics",
    description:
      "End-to-end inventory, warehouse, and shipping solutions. FBA prep, 3PL coordination, customs clearance, and logistics optimization.",
    icon: Truck,
    href: "/services/supply-chain",
    features: ["FBA Prep", "Warehouse Management", "Shipping Coordination", "Customs Clearance"],
  },
  {
    number: "06",
    title: "B2B Lead Generation",
    description:
      "Data-driven lead generation, sales pipelines, CRM management, and appointment setting for B2B businesses.",
    icon: Users,
    href: "/services/lead-generation",
    features: ["Lead Research", "Email Outreach", "CRM Management", "Appointment Setting"],
  },
  {
    number: "07",
    title: "Branding & Marketing",
    description: "Creative design, social media management, content marketing, and AI-powered advertising campaigns.",
    icon: Palette,
    href: "/services/branding",
    features: ["Brand Identity", "Social Media", "Content Marketing", "Ad Campaigns"],
  },
  {
    number: "08",
    title: "AI & Automation",
    description: "Intelligent workflows, chatbots, predictive analytics, and AI-powered business process automation.",
    icon: Brain,
    href: "/services/ai-automation",
    features: ["AI Chatbots", "Workflow Automation", "Predictive Analytics", "Process Optimization"],
  },
  {
    number: "09",
    title: "Customer Support",
    description: "24/7 multi-channel customer support for retail, eCommerce, and technology businesses.",
    icon: Headphones,
    href: "/services/customer-support",
    features: ["24/7 Support", "Multi-channel", "Ticket Management", "Quality Assurance"],
  },
  {
    number: "10",
    title: "IT Help Desk",
    description: "Remote troubleshooting, IT management, system administration, and technical support services.",
    icon: Monitor,
    href: "/services/it-helpdesk",
    features: ["Remote Support", "System Admin", "Network Management", "Security Monitoring"],
  },
  {
    number: "11",
    title: "Data Entry & Virtual Assistants",
    description: "Administrative excellence, data processing, research, and comprehensive virtual assistant services.",
    icon: FileText,
    href: "/services/data-entry",
    features: ["Data Processing", "Research", "Admin Tasks", "Documentation"],
  },
]

const process = [
  { step: "01", title: "Discovery", description: "We dive deep into your business, goals, and challenges." },
  { step: "02", title: "Strategy", description: "Develop a tailored roadmap for success." },
  { step: "03", title: "Execution", description: "Implement solutions with precision and expertise." },
  { step: "04", title: "Optimization", description: "Continuously improve and scale results." },
  { step: "05", title: "Support", description: "Ongoing partnership for long-term success." },
]

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
            alt="Digital technology"
            fill
            className="object-cover opacity-15"
            priority
            sizes="100vw"
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
              <span className="text-sm font-mono text-primary tracking-wider uppercase">Our Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
              <span className="text-foreground/90">Comprehensive</span>
              <br />
              <span className="text-gradient">digital solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              From eCommerce to cybersecurity, from AI automation to customer support. We offer 11 comprehensive service
              lines to power your business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Link href={service.href} className="group block h-full">
                  <div className="h-full p-8 rounded-3xl glass hover:glass-strong transition-all duration-500 hover:glow-primary">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-2xl glass-subtle group-hover:bg-primary/10 transition-all duration-300">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <div className="p-3 rounded-full glass-subtle group-hover:bg-primary/20 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 text-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground/90 mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span key={feature} className="px-3 py-1 text-xs font-medium rounded-full glass-subtle">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-mono text-primary tracking-wider uppercase">Our Process</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-foreground/90">How we</span> <span className="text-gradient">work</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="p-6 rounded-2xl glass hover:glass-strong transition-all duration-500 text-center">
                  <h3 className="text-lg font-semibold text-foreground/90 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center p-16 rounded-3xl glass-strong"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-foreground/90">Ready to</span>{" "}
              <span className="text-gradient">elevate your business?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our services can help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl bg-primary text-primary-foreground hover:glow-primary transition-all duration-500"
            >
              Get Free Consultation
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
