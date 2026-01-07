"use client"

import { Navigation, Footer } from "@/components/layout"
import { AnimatedBackground } from "@/components/common"
import { CaseStudyCard } from "@/components/pages/case-studies"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const categories = ["All", "eCommerce", "Web Development", "Cybersecurity", "AI & Automation", "Marketing"]

const caseStudies = [
  {
    id: 1,
    title: "PropertyHub Real Estate Platform",
    category: "Web Development",
    client: "PropertyHub",
    result: "Full-stack platform delivered",
    description: "Complete real estate website with property listings, advanced search, and integrated lead management system.",
    image: "/case-study-propertyhub.jpg",
    metrics: [
      { label: "Project Value", value: "PKR 125K" },
      { label: "Integrations", value: "3+" },
      { label: "Lead Capture", value: "100%" },
    ],
  },
  {
    id: 2,
    title: "HammerPath AI Video Generator",
    category: "AI & Automation",
    client: "HammerPath",
    result: "AI-powered web app launched",
    description: "Custom web application enabling users to generate professional AI-powered videos with intuitive controls.",
    image: "/case-study-hammerpath.jpg",
    metrics: [
      { label: "Project Value", value: "PKR 215K" },
      { label: "Platform", value: "Web App" },
      { label: "AI Models", value: "Integrated" },
    ],
  },
  {
    id: 3,
    title: "Yuaia Haircare AI Campaign",
    category: "AI & Automation",
    client: "Yuaia Haircare (Netherlands)",
    result: "90-day transformation video",
    description: "Realistic AI-generated video showing gradual hair transformation with educational storytelling approach.",
    image: "/case-study-yuaia.jpg",
    metrics: [
      { label: "Duration", value: "90 Days" },
      { label: "Market", value: "Netherlands" },
      { label: "Style", value: "Educational" },
    ],
  },
  {
    id: 4,
    title: "Cobra Production AI Content",
    category: "AI & Automation",
    client: "Cobra Production",
    result: "AI content system delivered",
    description: "Comprehensive AI-powered content generation workflow for professional production company.",
    image: "/case-study-cobra.jpg",
    metrics: [
      { label: "Project Value", value: "~PKR 240K" },
      { label: "Type", value: "AI Content" },
      { label: "Automation", value: "Full" },
    ],
  },
  {
    id: 5,
    title: "Audiobook Cover Design at Scale",
    category: "AI & Automation",
    client: "Audiobook Publisher",
    result: "3,020 designs delivered",
    description: "AI-generated audiobook covers following ACX standards: 20 unique variations per title across 151 books.",
    image: "/case-study-audiobook.jpg",
    metrics: [
      { label: "Titles", value: "151" },
      { label: "Designs", value: "3,020" },
      { label: "Value", value: "$500" },
    ],
  },
  {
    id: 6,
    title: "Smart Learning Arabia Videos",
    category: "AI & Automation",
    client: "Smart Learning Arabia",
    result: "AI educational content",
    description: "Ongoing AI-generated educational video content for Arabic learning platform.",
    image: "/case-study-smartlearning.jpg",
    metrics: [
      { label: "Per Video", value: "$100" },
      { label: "Type", value: "Educational" },
      { label: "Language", value: "Arabic" },
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
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-primary/80">Case Studies</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[0.95] mb-4 sm:mb-6">
              <span className="text-foreground/90">Success stories</span>
              <br />
              <span className="text-gradient">that inspire</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
              Explore how we&apos;ve helped businesses across industries achieve remarkable results through our
              comprehensive digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 sm:py-8 sticky top-20 z-30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "glass hover:glass-strong"
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {filteredStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center p-6 sm:p-10 md:p-12 rounded-xl sm:rounded-2xl glass-strong"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight mb-4">
              <span className="text-foreground/90">Want your own</span>{" "}
              <span className="text-gradient">success story?</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mb-5 max-w-xl mx-auto">
              Join our growing list of satisfied clients and transform your business today.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-[9px] sm:text-[10px] tracking-[0.15em] uppercase rounded-lg bg-primary text-primary-foreground hover:glow-primary transition-all duration-500"
            >
              Start Your Project
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
