"use client"

import { Navigation, Footer } from "@/components/layout"
import { AnimatedBackground } from "@/components/common"
import {
  ServicePageHero,
  ServiceOverview,
  ServiceFeatures,
  ServiceBenefits,
  ServiceProcess,
  ServiceFAQ,
  ServiceCTA,
} from "@/components/pages/services"
import { Palette, Megaphone, PenTool, Video, Target, BarChart3 } from "lucide-react"

const features = [
  {
    icon: PenTool,
    title: "Brand Identity Design",
    description:
      "Complete brand identity including logo, color palette, typography, and visual guidelines that make your brand memorable.",
  },
  {
    icon: Palette,
    title: "Visual Design",
    description:
      "Stunning graphics, illustrations, and visual assets for print, digital, and social media that reinforce your brand.",
  },
  {
    icon: Video,
    title: "Video Production",
    description:
      "Professional video content from concept to delivery including explainers, ads, testimonials, and social content.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Integrated marketing campaigns across paid social, search, display, and content marketing channels.",
  },
  {
    icon: Target,
    title: "Social Media Management",
    description:
      "Strategic social presence with content creation, community management, and influencer partnerships.",
  },
  {
    icon: BarChart3,
    title: "Marketing Analytics",
    description:
      "Data-driven insights to measure campaign performance, optimize spend, and maximize marketing ROI.",
  },
]

const benefits = [
  "1M+ impressions average per campaign",
  "3x improvement in brand recognition",
  "Consistent brand across all touchpoints",
  "Award-winning creative team",
  "Full-service agency capabilities",
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Deep dive into your brand, audience, competitors, and goals to inform our creative strategy.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Develop comprehensive brand and marketing strategy with clear positioning and messaging.",
  },
  {
    step: "03",
    title: "Creation",
    description: "Design and produce all brand assets and marketing materials with multiple rounds of refinement.",
  },
  {
    step: "04",
    title: "Launch & Optimize",
    description: "Execute marketing campaigns, monitor performance, and continuously optimize for results.",
  },
]

const faqs = [
  {
    question: "What's included in a brand identity package?",
    answer:
      "Our brand identity packages typically include logo design (with variations), color palette, typography system, brand guidelines document, business cards, letterhead, and social media templates. We customize packages based on your needs.",
  },
  {
    question: "How long does a rebrand take?",
    answer:
      "A comprehensive rebrand typically takes 8-12 weeks from discovery to final deliverables. Simpler projects like logo refreshes can be completed in 4-6 weeks. We provide detailed timelines during the discovery phase.",
  },
  {
    question: "Do you offer ongoing marketing services?",
    answer:
      "Yes, we offer monthly retainer packages for ongoing marketing services including social media management, content creation, paid advertising management, and campaign execution.",
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer:
      "Absolutely. We regularly work within established brand guidelines to create assets and campaigns. We can also help evolve and update existing guidelines while maintaining brand consistency.",
  },
]

const stats = [
  { value: "1M+", label: "Avg Impressions" },
  { value: "3x", label: "Brand Recognition" },
  { value: "200+", label: "Brands Created" },
  { value: "8.5%", label: "Avg Engagement" },
]

export default function BrandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />

      <ServicePageHero
        title="Branding &"
        highlightedTitle="Creative Marketing"
        description="Build a brand that resonates. From identity design to multi-channel campaigns, we create memorable brands and drive engagement."
      />

      <ServiceOverview
        title="Elevate your"
        highlightedTitle="brand presence"
        description="Your brand is more than a logo—it's the entire experience you create for your customers. We help you define, design, and communicate your brand in ways that drive recognition and loyalty."
        additionalDescription="Our creative team combines strategic thinking with exceptional design execution to build brands that stand out in crowded markets and marketing campaigns that deliver measurable results."
        stats={stats}
      />

      <ServiceFeatures title="Full-Service" highlightedTitle="Creative & Marketing" features={features} />

      <ServiceBenefits
        title="Creative that"
        highlightedTitle="performs"
        benefits={benefits}
        highlightValue="1M+"
        highlightLabel="Average Campaign Impressions"
        highlightDescription="Our marketing campaigns consistently generate over 1 million impressions, driving significant brand awareness and engagement for our clients."
      />

      <ServiceProcess title="Our creative" highlightedTitle="process" steps={process} />

      <ServiceFAQ title="Branding" highlightedTitle="FAQ" faqs={faqs} />

      <ServiceCTA
        title="Ready to build"
        highlightedTitle="your brand?"
        description="Let's create a brand identity and marketing strategy that sets you apart and drives business growth."
      />

      <Footer />
    </main>
  )
}
