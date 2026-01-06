"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["All", "eCommerce", "Web Development", "Cybersecurity", "AI & Automation", "Marketing"]

const caseStudies = [
  {
    id: 1,
    title: "Global Retailer Revenue Transformation",
    category: "eCommerce",
    client: "Fashion Brand",
    result: "320% revenue increase",
    description: "Complete marketplace optimization and expansion across Amazon, Walmart, and Shopify.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    metrics: [
      { label: "Revenue Growth", value: "320%" },
      { label: "Markets Expanded", value: "5" },
      { label: "ROI", value: "12x" },
    ],
  },
  {
    id: 2,
    title: "Enterprise Security Overhaul",
    category: "Cybersecurity",
    client: "FinTech Startup",
    result: "Zero breaches post-implementation",
    description: "Comprehensive security audit, penetration testing, and infrastructure hardening.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    metrics: [
      { label: "Vulnerabilities Fixed", value: "147" },
      { label: "Compliance", value: "100%" },
      { label: "Downtime", value: "0" },
    ],
  },
  {
    id: 3,
    title: "AI-Powered Customer Service",
    category: "AI & Automation",
    client: "SaaS Company",
    result: "75% reduction in response time",
    description: "Implementation of AI chatbots and automated workflow systems.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    metrics: [
      { label: "Response Time", value: "-75%" },
      { label: "Satisfaction", value: "94%" },
      { label: "Cost Saved", value: "$2.3M" },
    ],
  },
  {
    id: 4,
    title: "Brand Launch Campaign",
    category: "Marketing",
    client: "Consumer Goods",
    result: "1M+ impressions in 30 days",
    description: "Full-scale brand identity design and multi-channel marketing campaign.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    metrics: [
      { label: "Impressions", value: "1M+" },
      { label: "Engagement", value: "8.5%" },
      { label: "Leads", value: "12K" },
    ],
  },
  {
    id: 5,
    title: "E-commerce Platform Rebuild",
    category: "Web Development",
    client: "B2B Wholesale",
    result: "200% improvement in performance",
    description: "Custom Next.js e-commerce platform with advanced inventory management.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    metrics: [
      { label: "Load Time", value: "-70%" },
      { label: "Conversions", value: "+45%" },
      { label: "Orders/Day", value: "3x" },
    ],
  },
  {
    id: 6,
    title: "Multi-Marketplace Expansion",
    category: "eCommerce",
    client: "Electronics Brand",
    result: "Expanded to 8 new markets",
    description: "Strategic expansion across Amazon EU, UK, and emerging marketplaces.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    metrics: [
      { label: "New Markets", value: "8" },
      { label: "Revenue", value: "+180%" },
      { label: "SKUs Listed", value: "5K+" },
    ],
  },
]

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredStudies =
    activeCategory === "All" ? caseStudies : caseStudies.filter((study) => study.category === activeCategory)

  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop"
            alt="Business analytics"
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
              <span className="text-sm font-mono text-primary tracking-wider uppercase">Case Studies</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
              <span className="text-foreground/90">Success stories</span>
              <br />
              <span className="text-gradient">that inspire</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              Explore how we&apos;ve helped businesses across industries achieve remarkable results through our
              comprehensive digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 sticky top-24 z-30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "glass hover:glass-strong",
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <Link href={`/case-studies/${study.id}`} className="group block">
                  <div className="rounded-3xl overflow-hidden glass hover:glass-strong transition-all duration-500 hover:glow-primary">
                    {/* Image */}
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="px-3 py-1 text-xs font-mono rounded-full glass-subtle">{study.category}</span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="p-3 rounded-full glass-strong group-hover:bg-primary/20 transition-all duration-300">
                          <ArrowUpRight className="w-5 h-5 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center gap-2 text-sm text-primary mb-3">
                        <TrendingUp className="w-4 h-4" />
                        {study.result}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground/90 mb-3 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">{study.description}</p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                        {study.metrics.map((metric) => (
                          <div key={metric.label}>
                            <div className="text-xl font-bold text-gradient">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
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
              <span className="text-foreground/90">Want your own</span>{" "}
              <span className="text-gradient">success story?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients and transform your business today.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl bg-primary text-primary-foreground hover:glow-primary transition-all duration-500"
            >
              Start Your Project
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
