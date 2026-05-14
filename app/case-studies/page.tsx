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
    id: 3,
    title: "PropertyHub Real Estate Platform",
    category: "Web Development",
    client: "PropertyHub",
    result: "Complete platform with CRM",
    description: "Real estate website with payment integration and GoHighLevel CRM integration for lead management.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    metrics: [
      { label: "Integration", value: "GHL CRM" },
      { label: "Payments", value: "Integrated" },
      { label: "Type", value: "Real Estate" },
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    metrics: [
      { label: "Users", value: "10K+" },
      { label: "Tech", value: "Next.js" },
      { label: "Type", value: "SaaS" },
    ],
  },
  {
    id: 8,
    title: "AZ Remote Books - Digital Library",
    category: "eCommerce",
    client: "AZ Remote Books",
    result: "50K+ books available",
    description: "Digital library platform with advanced search, personalized recommendations, and multi-device reading experience.",
    image: "https://images.unsplash.com/photo-1507842217343-583f20270419?w=800&h=600&fit=crop",
    metrics: [
      { label: "Books", value: "50K+" },
      { label: "Users", value: "25K+" },
      { label: "Type", value: "E-Learning" },
    ],
  },
  {
    id: 9,
    title: "Codminal - Enterprise Dashboard",
    category: "Web Development",
    client: "Codminal",
    result: "Enterprise-grade admin dashboard",
    description: "Sophisticated admin dashboard with RBAC, real-time monitoring, analytics, and comprehensive security features.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    metrics: [
      { label: "Enterprise Users", value: "500+" },
      { label: "Uptime", value: "99.99%" },
      { label: "Type", value: "Admin Platform" },
    ],
  },
  {
    id: 10,
    title: "Sfykea - E-Commerce & Admin Suite",
    category: "eCommerce",
    client: "Sfykea",
    result: "$2.5M Year 1 revenue",
    description: "Full-stack e-commerce platform with sophisticated admin dashboard for inventory, orders, and customer management.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=600&fit=crop",
    metrics: [
      { label: "Revenue", value: "$2.5M" },
      { label: "Products", value: "5K+" },
      { label: "Growth", value: "+45%" },
    ],
  },
  {
    id: 11,
    title: "Ittehad - Corporate Website",
    category: "Web Development",
    client: "Ittehad Corp",
    result: "8K+ monthly visitors",
    description: "Professional corporate website with service showcases, case studies, blog, and optimized lead capture.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    metrics: [
      { label: "Monthly Visitors", value: "8K+" },
      { label: "Leads/Month", value: "200+" },
      { label: "Conversion", value: "2.5%" },
    ],
  },
  {
    id: 12,
    title: "Hyundai Islamabad - Automotive Portal",
    category: "eCommerce",
    client: "Hyundai Islamabad",
    result: "+150% showroom visits",
    description: "Automotive platform with vehicle catalogs, financing calculator, dealer locator, and service booking.",
    image: "https://images.unsplash.com/photo-1533473359331-35e646e0db4d?w=800&h=600&fit=crop",
    metrics: [
      { label: "Showroom Visits", value: "+150%" },
      { label: "Bookings/Month", value: "800+" },
      { label: "Mobile Users", value: "70%" },
    ],
  },
  {
    id: 13,
    title: "Jetourittehad - Digital Transformation",
    category: "Web Development",
    client: "Jetourittehad",
    result: "Full digital transformation",
    description: "Complete web infrastructure redesign with modern architecture, performance optimization, and integrated digital marketing.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    metrics: [
      { label: "Performance", value: "+80%" },
      { label: "Traffic", value: "+120%" },
      { label: "Conversions", value: "+65%" },
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
