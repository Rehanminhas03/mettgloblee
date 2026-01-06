"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["All", "Web Development", "eCommerce", "Branding", "Mobile Apps", "AI Solutions", "AI Video & Ads", "E-books & Content"]

const portfolioItems = [
  // FEATURED - Real Client Projects
  {
    id: 1,
    title: "Yuaia Haircare - AI Video Campaign",
    category: "AI Video & Ads",
    client: "Yuaia Haircare (Netherlands)",
    description: "90-day hair transformation AI video showing realistic, gradual results for Grow & Glow Formula+. Calm, educational storytelling focused on process over promises.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["Runway ML", "After Effects", "AI Animation"],
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "HammerPath - AI Video Generator",
    category: "AI Solutions",
    client: "HammerPath",
    description: "Full-stack web application for AI-powered video generation. Automated content creation platform with custom rendering pipeline.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["Next.js", "Python", "AI APIs"],
    link: "#",
    featured: true,
  },
  {
    id: 3,
    title: "PropertyHub Real Estate Platform",
    category: "Web Development",
    client: "PropertyHub",
    description: "Complete real estate website with payment integration and GHL (GoHighLevel) CRM integration for lead management.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["Next.js", "Payment Gateway", "GHL Integration"],
    link: "#",
    featured: true,
  },
  // Real Client Projects
  {
    id: 4,
    title: "Cobra Production - AI Content",
    category: "AI Video & Ads",
    client: "Cobra Production",
    description: "AI-powered content generation system for automated video and marketing material production at scale.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["AI Generation", "Content Automation", "Video Production"],
    link: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Smart Learning Arabia - AI Teaching",
    category: "AI Video & Ads",
    client: "Smart Learning Arabia",
    description: "AI-generated educational videos for e-learning platform. Professional quality teaching content with AI avatars.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["HeyGen", "ElevenLabs", "Educational AI"],
    link: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Audiobook Cover Collection",
    category: "E-books & Content",
    client: "Publishing Client",
    description: "AI-generated audiobook covers for 151+ titles. Classic, professional designs adhering to ACX quality standards.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["Midjourney", "DALL-E", "Adobe Photoshop"],
    link: "#",
    featured: false,
  },
  {
    id: 7,
    title: "E-book Creation & Design",
    category: "E-books & Content",
    client: "Multiple Authors",
    description: "Professional e-book creation including cover design, formatting, and interior layout for digital publishing.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["Adobe InDesign", "Canva", "AI Cover Generation"],
    link: "#",
    featured: false,
  },
  {
    id: 8,
    title: "AI Teaching Video Production",
    category: "AI Video & Ads",
    client: "Educational Clients",
    description: "Hourly AI teaching video production service. Creating engaging educational content with AI presenters and animations.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["Synthesia", "D-ID", "Video Editing"],
    link: "#",
    featured: false,
  },
  // Additional Portfolio Projects
  {
    id: 9,
    title: "Fashion E-commerce Platform",
    category: "eCommerce",
    client: "StyleHub",
    description: "High-converting fashion marketplace with advanced filtering, AI-powered recommendations, and seamless checkout.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["Next.js", "Shopify", "Tailwind CSS"],
    link: "#",
    featured: false,
  },
  {
    id: 10,
    title: "FinTech Analytics Dashboard",
    category: "Web Development",
    client: "SecureBank",
    description: "Real-time financial analytics dashboard with advanced charting, portfolio management, and secure transactions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["React", "Node.js", "PostgreSQL"],
    link: "#",
    featured: false,
  },
  {
    id: 11,
    title: "Healthcare Mobile App",
    category: "Mobile Apps",
    client: "MediCare+",
    description: "Patient management mobile app with appointment scheduling, telemedicine, and health tracking features.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["React Native", "Firebase", "Node.js"],
    link: "#",
    featured: false,
  },
  {
    id: 12,
    title: "AI Product Video Generator",
    category: "AI Video & Ads",
    client: "eComm Solutions",
    description: "Automated AI system generating professional product showcase videos for Amazon and Shopify listings.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["Synthesia", "D-ID", "Python"],
    link: "#",
    featured: false,
  },
  {
    id: 13,
    title: "AI Customer Support Bot",
    category: "AI Solutions",
    client: "TechCorp",
    description: "Intelligent chatbot handling 10,000+ daily queries with 94% accuracy and seamless human escalation.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["OpenAI", "Python", "React"],
    link: "#",
    featured: false,
  },
  {
    id: 14,
    title: "AI Avatar Training Videos",
    category: "AI Video & Ads",
    client: "Global Training Inc.",
    description: "Created 50+ AI avatar training videos in multiple languages for corporate training platform.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["HeyGen", "ElevenLabs", "Premiere Pro"],
    link: "#",
    featured: false,
  },
  {
    id: 15,
    title: "Multi-Vendor Marketplace",
    category: "eCommerce",
    client: "GlobalMart",
    description: "Scalable multi-vendor platform with seller dashboards, inventory sync, and automated payouts.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["Next.js", "Stripe", "MongoDB"],
    link: "#",
    featured: false,
  },
  {
    id: 16,
    title: "AI Social Media Creatives",
    category: "AI Video & Ads",
    client: "Fashion Forward",
    description: "AI-powered ad creative generation for Instagram and TikTok, producing 200+ unique variations monthly.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["Midjourney", "DALL-E", "Canva AI"],
    link: "#",
    featured: false,
  },
  {
    id: 17,
    title: "SaaS Marketing Website",
    category: "Branding",
    client: "CloudSync",
    description: "Complete brand identity and marketing website for a B2B SaaS platform with interactive demos.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["Next.js", "Framer Motion", "Figma"],
    link: "#",
    featured: false,
  },
  {
    id: 18,
    title: "Fitness Brand Identity",
    category: "Branding",
    client: "FitLife",
    description: "Complete brand identity including logo, packaging, website, and social media presence.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["Figma", "Adobe CC", "Webflow"],
    link: "#",
    featured: false,
  },
  {
    id: 19,
    title: "AI Voice-Over Production",
    category: "AI Video & Ads",
    client: "MediaHouse",
    description: "AI-generated voice-overs in 20+ languages for documentary and commercial video production.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["ElevenLabs", "Murf AI", "Pro Tools"],
    link: "#",
    featured: false,
  },
  {
    id: 20,
    title: "Inventory Prediction AI",
    category: "AI Solutions",
    client: "SupplyMax",
    description: "Machine learning system predicting inventory needs with 95% accuracy, reducing stockouts by 60%.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&h=600&q=80",
    technologies: ["Python", "TensorFlow", "AWS"],
    link: "#",
    featured: false,
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  const featuredItems = portfolioItems.filter((item) => item.featured)

  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1920&h=1080&q=80"
            alt="Portfolio showcase"
            fill
            className="object-cover opacity-15"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
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
              <span className="text-sm font-mono text-primary tracking-wider uppercase">Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
              <span className="text-foreground/90">Our best</span>
              <br />
              <span className="text-gradient">work</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              Explore our portfolio of successful projects. From eCommerce platforms to AI solutions,
              see how we've helped businesses achieve their digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8">
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
                    : "glass hover:glass-strong"
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      {activeCategory === "All" && (
        <section className="py-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold">
                <span className="text-gradient">Featured Projects</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredItems.slice(0, 2).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="rounded-3xl overflow-hidden glass hover:glass-strong transition-all duration-500 hover:glow-primary">
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-mono rounded-full glass-subtle">
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-mono rounded-full bg-primary text-primary-foreground">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full glass-subtle"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-primary">{item.client}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems
              .filter((item) => activeCategory !== "All" || !item.featured)
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  layout
                  className="group"
                >
                  <div className="h-full rounded-2xl overflow-hidden glass hover:glass-strong transition-all duration-500 hover:glow-primary">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <span className="absolute top-3 left-3 px-2 py-1 text-xs font-mono rounded-full glass-subtle">
                        {item.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {item.technologies.slice(0, 2).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs rounded-full glass-subtle"
                          >
                            {tech}
                          </span>
                        ))}
                        {item.technologies.length > 2 && (
                          <span className="px-2 py-0.5 text-xs rounded-full glass-subtle">
                            +{item.technologies.length - 2}
                          </span>
                        )}
                      </div>
                      <div className="pt-4 border-t border-border/50">
                        <span className="text-xs text-primary">{item.client}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
              { value: "15+", label: "Countries Served" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl glass"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
            className="text-center p-16 rounded-3xl glass-strong"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-foreground/90">Have a project</span>{" "}
              <span className="text-gradient">in mind?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch to discuss your project.
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
