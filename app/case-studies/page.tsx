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
import { Card3D } from "@/components/card-3d"

const categories = ["All", "eCommerce", "Web Development", "AI & Automation"]

const caseStudies = [
  {
    id: 1,
    title: "Yuaia Haircare - AI Video Campaign",
    category: "AI & Automation",
    client: "Yuaia Haircare (Netherlands)",
    result: "Professional AI video content",
    description: "90-day hair transformation AI video showing realistic, gradual results for Grow & Glow Formula+. Calm, educational storytelling approach.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop",
    metrics: [
      { label: "Duration", value: "90-day" },
      { label: "Format", value: "AI Video" },
      { label: "Style", value: "Educational" },
    ],
  },
  {
    id: 2,
    title: "HammerPath - AI Video Generator",
    category: "Web Development",
    client: "HammerPath",
    result: "Full-stack AI platform",
    description: "Full-stack web application for AI-powered video generation with automated content creation pipeline.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    metrics: [
      { label: "Tech Stack", value: "Next.js" },
      { label: "Backend", value: "Python" },
      { label: "Type", value: "SaaS" },
    ],
  },
  {
    id: 4,
    title: "Smart Learning Arabia - AI Teaching",
    category: "AI & Automation",
    client: "Smart Learning Arabia",
    result: "AI educational content",
    description: "AI-generated educational videos for e-learning platform with professional AI avatars.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    metrics: [
      { label: "Platform", value: "E-Learning" },
      { label: "Tech", value: "HeyGen" },
      { label: "Type", value: "Educational" },
    ],
  },
  {
    id: 7,
    title: "Marketlyn - AI Marketing Platform",
    category: "Web Development",
    client: "Marketlyn",
    result: "10K+ active users",
    description: "AI-powered marketing platform for automated campaign management with real-time analytics and multi-channel optimization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    metrics: [
      { label: "Users", value: "10K+" },
      { label: "Tech", value: "Next.js" },
      { label: "Type", value: "SaaS" },
    ],
  },
  {
    id: 8,
    title: "AZ Remote Books - ACCA & CA Study Resources",
    category: "eCommerce",
    client: "AZ Remote Books",
    result: "Online catalog + checkout for ACCA and CA learners",
    description: "Storefront for ACCA and CA study materials — textbooks, revision kits, and exam-prep resources organized by paper code, with card and bank-transfer checkout.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    metrics: [
      { label: "Catalog", value: "ACCA + CA" },
      { label: "Checkout", value: "Card + Bank" },
      { label: "Admin", value: "Self-serve" },
    ],
  },
  {
    id: 9,
    title: "Codminal - Service-Based Business Website",
    category: "Web Development",
    client: "Codminal",
    result: "Service catalog + enquiry pipeline live",
    description: "Service-business website rebuilt around the service catalog, with per-service enquiry forms that pre-qualify leads before they land in the inbox.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
    metrics: [
      { label: "Enquiries", value: "Pre-qualified" },
      { label: "Routing", value: "By service" },
      { label: "Type", value: "Services Site" },
    ],
  },
  {
    id: 10,
    title: "Sfykea - At-Home Car Wash Booking Platform",
    category: "Web Development",
    client: "Sfykea",
    result: "Booking + technician dispatch live across multiple cities",
    description: "Mobile-first booking platform for an at-home car wash service — package selection, time slots, payments, and a dispatch dashboard for the operations team.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&h=600&fit=crop",
    metrics: [
      { label: "Booking", value: "< 1 min" },
      { label: "Service Areas", value: "Multi-city" },
      { label: "Type", value: "Mobile Auto Care" },
    ],
  },
  {
    id: 11,
    title: "Ittehad Steel Industries - Corporate & Product Catalog",
    category: "Web Development",
    client: "Ittehad Steel Industries",
    result: "B2B catalog + RFQ pipeline live",
    description: "Corporate website and product catalog for one of Pakistan's established steel manufacturers — structured RFQ flow capturing grade, quantity, and project context per lead.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
    metrics: [
      { label: "Catalog", value: "Rebar + Sections" },
      { label: "RFQ Flow", value: "CRM-routed" },
      { label: "Type", value: "Steel Manufacturing" },
    ],
  },
  {
    id: 12,
    title: "Hyundai Islamabad - Automotive Portal",
    category: "eCommerce",
    client: "Hyundai Islamabad",
    result: "+150% showroom visits",
    description: "Automotive platform with vehicle catalogs, financing calculator, dealer locator, and service booking.",
    image: "/casestudy/hyundai.jfif",
    metrics: [
      { label: "Showroom Visits", value: "+150%" },
      { label: "Bookings/Month", value: "800+" },
      { label: "Mobile Users", value: "70%" },
    ],
  },
  {
    id: 13,
    title: "Jetour Pakistan - Dealership Website",
    category: "Web Development",
    client: "Jetour Pakistan (Ittehad Motors)",
    result: "Model showcase, test-drive booking & dealer locator — live",
    description: "Dealership site for Jetour's Pakistan lineup (Coolray, T2, X70). Test-drive bookings route to the customer's chosen dealer with the preferred slot pre-attached.",
    image: "/casestudy/jetour.jfif",
    metrics: [
      { label: "Test Drives", value: "Routed" },
      { label: "Dealer Locator", value: "Nationwide" },
      { label: "Type", value: "Automotive Retail" },
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
                  <Card3D intensity={5} hoverLift={5} className="rounded-3xl overflow-hidden glass hover:glass-strong transition-all duration-500 hover:glow-primary block">
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
                  </Card3D>
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
