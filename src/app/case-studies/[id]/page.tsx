import { Navigation, Footer } from "@/components/layout"
import { AnimatedBackground } from "@/components/common"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CheckCircle, TrendingUp, Target, Zap } from "lucide-react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

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
      { label: "Platform", value: "Full-Stack" },
      { label: "Integrations", value: "3+" },
      { label: "Lead Capture", value: "100%" },
    ],
    challenge: "PropertyHub needed a modern, professional real estate platform to showcase property listings and capture leads effectively. They required payment integration capabilities and CRM connectivity through GoHighLevel (GHL) for lead management, but lacked the technical expertise to build a cohesive system.",
    solution: "We developed a comprehensive real estate website with advanced property search and filtering, beautiful listing pages with image galleries, integrated contact forms for lead capture, and prepared architecture for payment gateway and GHL CRM integration. The platform was built with scalability in mind to accommodate future growth.",
    results: [
      "Delivered complete full-stack real estate platform",
      "Built property listing system with advanced search",
      "Integrated lead capture forms throughout the site",
      "Prepared payment integration architecture",
      "Designed GHL CRM integration framework"
    ],
    testimonial: {
      quote: "METT Global delivered exactly what we envisioned. The platform is professional, fast, and our lead capture has improved dramatically.",
      author: "Property Manager",
      role: "PropertyHub Team"
    }
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
      { label: "Platform", value: "Web App" },
      { label: "AI Models", value: "Integrated" },
      { label: "Users", value: "Scalable" },
    ],
    challenge: "HammerPath wanted to democratize AI video creation by building a web application that allows users to generate professional-quality videos using artificial intelligence. The challenge was creating an intuitive interface that abstracts complex AI processes while delivering high-quality output.",
    solution: "We built a full-stack web application with AI video generation capabilities, featuring an intuitive user interface for video creation, backend integration with AI models, video processing and rendering pipelines, and user account management. The platform makes AI video creation accessible to non-technical users.",
    results: [
      "Launched complete AI video generation platform",
      "Integrated multiple AI models for video creation",
      "Built intuitive user interface for easy operation",
      "Implemented video processing and export features",
      "Created scalable architecture for growing user base"
    ],
    testimonial: {
      quote: "The team at METT Global understood our vision perfectly. They built an AI platform that our users love.",
      author: "Product Lead",
      role: "HammerPath"
    }
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
    challenge: "Yuaia Haircare, a Netherlands-based brand, needed a promotional video that shows realistic, gradual hair transformation over 90 days. The video had to avoid miracle claims, focus on the process rather than instant results, and maintain an educational, calm tone that builds trust with viewers.",
    solution: "We created an AI-generated video featuring a female character (inspired by the founder) going through a believable 90-day hair transformation. The video shows progressive changes: reduced shedding, stronger hair strands, new hair growth, and improved density. The Grow & Glow Formula+ product was introduced naturally as part of the routine, not as a miracle solution.",
    results: [
      "Delivered realistic 90-day transformation narrative",
      "Created AI character with progressive visual changes",
      "Maintained educational, non-salesy tone throughout",
      "Integrated product placement naturally in the story",
      "Produced content suitable for Netherlands/EU market"
    ],
    testimonial: {
      quote: "METT Global captured exactly what we wanted—a realistic, trustworthy transformation story. No miracle claims, just honest storytelling.",
      author: "Brand Director",
      role: "Yuaia Haircare"
    }
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
      { label: "Workflow", value: "Automated" },
      { label: "Type", value: "AI Content" },
      { label: "Scale", value: "Enterprise" },
    ],
    challenge: "Cobra Production, a content production company, needed to scale their content output while maintaining quality. They required an AI-powered system that could generate various types of content efficiently, reducing production time and costs without sacrificing the creative quality their clients expect.",
    solution: "We implemented a comprehensive AI content generation workflow tailored to Cobra Production's needs. The system automates content ideation, script generation, visual asset creation, and post-production workflows. Quality control checkpoints ensure all AI-generated content meets professional standards before delivery.",
    results: [
      "Implemented end-to-end AI content workflow",
      "Reduced content production time significantly",
      "Maintained consistent quality across outputs",
      "Built scalable system for growing demand",
      "Integrated with existing production pipelines"
    ],
    testimonial: {
      quote: "The AI content system has transformed how we work. We're producing more content, faster, without compromising on quality.",
      author: "Production Manager",
      role: "Cobra Production"
    }
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
      { label: "Per Title", value: "20 Each" },
    ],
    challenge: "An audiobook publisher needed 20+ unique cover design inspirations for each of 151 audiobook titles—a total of 3,020 designs. Each cover had to follow ACX quality standards: square format, clear title text, single standout design element, classic aesthetic with color contrasts, and distinctly different from existing designs.",
    solution: "We developed an AI-powered design workflow to generate audiobook covers at scale. Each design features a square format optimized for audiobook platforms, prominently displayed title text, single focal design element to avoid busy compositions, classic look with intentional color contrasts. All 151 titles received 20 unique variations.",
    results: [
      "Delivered 3,020 unique cover designs (20 per title)",
      "Met all ACX audiobook cover quality standards",
      "Created distinct variations for each of 151 titles",
      "Maintained consistent classic aesthetic throughout",
      "Completed project efficiently with rapid turnaround"
    ],
    testimonial: {
      quote: "The quality and variety exceeded our expectations. Having 20 options per title made selecting final covers easy.",
      author: "Publishing Director",
      role: "Audiobook Publisher"
    }
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
      { label: "Type", value: "Educational" },
      { label: "Language", value: "Arabic" },
      { label: "Status", value: "Ongoing" },
    ],
    challenge: "Smart Learning Arabia, an educational platform, needed a steady stream of AI-generated teaching videos to support their Arabic-language learning content. The videos had to be educational, engaging, and culturally appropriate for their target audience while being produced efficiently at scale.",
    solution: "We established an ongoing production partnership for AI-generated educational videos. Each video is crafted to be informative and engaging, with clear explanations suitable for learning contexts. The AI generation process allows for consistent quality and efficient production.",
    results: [
      "Established ongoing AI video production workflow",
      "Delivering educational content consistently",
      "Created culturally appropriate Arabic content",
      "Maintained educational quality and engagement",
      "Built scalable production process for ongoing needs"
    ],
    testimonial: {
      quote: "METT Global has become our go-to partner for educational video content. Quality, speed, and value—they deliver on all fronts.",
      author: "Content Director",
      role: "Smart Learning Arabia"
    }
  },
]

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id.toString(),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const study = caseStudies.find((s) => s.id === parseInt(id))

  if (!study) {
    return {
      title: "Case Study Not Found | METT Global",
    }
  }

  return {
    title: `${study.title} | METT Global Case Study`,
    description: study.description,
    openGraph: {
      title: study.title,
      description: study.description,
      type: "article",
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const study = caseStudies.find((s) => s.id === parseInt(id))

  if (!study) {
    notFound()
  }

  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 md:pt-40 pb-8 sm:pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-[10px] font-medium rounded-full bg-primary/20 text-primary mb-4">
              {study.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-4">
              {study.title}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              {study.description}
            </p>
            <p className="text-xs text-primary/80">
              Client: {study.client}
            </p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            {study.metrics.map((metric, index) => (
              <div key={index} className="p-4 sm:p-6 rounded-xl glass-strong text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">
                  {metric.value}
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden">
              <img
                src={study.image || "/placeholder.svg"}
                alt={study.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Challenge */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg glass-subtle">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-lg sm:text-xl font-semibold">The Challenge</h2>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {study.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg glass-subtle">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-lg sm:text-xl font-semibold">Our Solution</h2>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {study.solution}
              </p>
            </div>

            {/* Results */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg glass-subtle">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-lg sm:text-xl font-semibold">The Results</h2>
              </div>
              <ul className="space-y-3">
                {study.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial */}
            <div className="p-6 sm:p-8 rounded-xl glass-strong">
              <blockquote className="text-sm sm:text-base italic text-foreground/90 mb-4">
                &ldquo;{study.testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium">
                  {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-medium">{study.testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{study.testimonial.role}</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Ready to achieve similar results?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Let&apos;s discuss how we can help transform your business.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 text-xs tracking-wider uppercase rounded-lg bg-primary text-primary-foreground hover:glow-primary transition-all"
              >
                Start Your Project
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
