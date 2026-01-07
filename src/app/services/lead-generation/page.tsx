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
import { Users, Target, Mail, Phone, Database, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Targeted Prospecting",
    description:
      "Identify and qualify high-value prospects using advanced data analytics, intent signals, and ideal customer profiling.",
  },
  {
    icon: Mail,
    title: "Email Campaigns",
    description:
      "Multi-touch email sequences with personalized messaging, A/B testing, and automated follow-ups that convert.",
  },
  {
    icon: Phone,
    title: "Cold Calling",
    description:
      "Professional SDR teams that book qualified meetings with decision-makers in your target accounts.",
  },
  {
    icon: Database,
    title: "Data Enrichment",
    description:
      "Clean, enrich, and maintain your prospect database with verified contact information and company insights.",
  },
  {
    icon: Users,
    title: "LinkedIn Outreach",
    description:
      "Strategic LinkedIn campaigns including connection requests, messaging sequences, and content engagement.",
  },
  {
    icon: TrendingUp,
    title: "Pipeline Analytics",
    description:
      "Comprehensive reporting on lead quality, conversion rates, and ROI to continuously optimize performance.",
  },
]

const benefits = [
  "500% ROI on lead generation investment",
  "40% higher conversion rates than industry average",
  "Qualified meetings with decision-makers",
  "Seamless CRM integration",
  "Dedicated campaign managers",
]

const process = [
  {
    step: "01",
    title: "ICP Development",
    description: "Define your ideal customer profile with detailed criteria including industry, company size, job titles, and pain points.",
  },
  {
    step: "02",
    title: "List Building",
    description: "Build a targeted prospect list using multiple data sources, verified and enriched for accuracy.",
  },
  {
    step: "03",
    title: "Campaign Execution",
    description: "Launch multi-channel outreach campaigns with personalized messaging optimized for response.",
  },
  {
    step: "04",
    title: "Lead Handoff",
    description: "Deliver qualified leads directly to your sales team with full context and seamless CRM integration.",
  },
]

const faqs = [
  {
    question: "What channels do you use for lead generation?",
    answer:
      "We use a multi-channel approach including email outreach, cold calling, LinkedIn campaigns, and content syndication. We optimize the channel mix based on your target audience and industry.",
  },
  {
    question: "How do you qualify leads?",
    answer:
      "We use BANT (Budget, Authority, Need, Timeline) and custom qualification criteria you define. Only leads meeting your specific criteria are passed to your sales team.",
  },
  {
    question: "Can you integrate with our CRM?",
    answer:
      "Yes, we integrate with all major CRMs including Salesforce, HubSpot, Pipedrive, and Zoho. Leads are automatically synced with full activity history and notes.",
  },
  {
    question: "What's the typical cost per lead?",
    answer:
      "Cost varies based on target market, industry, and qualification criteria. We provide transparent pricing and typically deliver 500%+ ROI on your lead generation investment.",
  },
]

const stats = [
  { value: "500%", label: "Average ROI" },
  { value: "40%", label: "Higher Conversion" },
  { value: "10K+", label: "Leads Generated" },
  { value: "95%", label: "Data Accuracy" },
]

export default function LeadGenerationPage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />

      <ServicePageHero
        title="B2B"
        highlightedTitle="Lead Generation"
        description="Fill your pipeline with qualified leads. Our data-driven approach connects you with decision-makers who are ready to buy."
      />

      <ServiceOverview
        title="Accelerate your"
        highlightedTitle="sales pipeline"
        description="Stop wasting time on unqualified leads. Our lead generation services deliver qualified prospects directly to your sales team, ready for meaningful conversations."
        additionalDescription="We combine advanced data analytics, proven outreach strategies, and experienced SDRs to generate a consistent flow of high-quality leads that convert into customers."
        stats={stats}
      />

      <ServiceFeatures title="Multi-Channel" highlightedTitle="Lead Generation" features={features} />

      <ServiceBenefits
        title="Results that"
        highlightedTitle="drive revenue"
        benefits={benefits}
        highlightValue="500%"
        highlightLabel="Average ROI"
        highlightDescription="Our clients typically see a 500% return on their lead generation investment through higher quality leads and improved conversion rates."
      />

      <ServiceProcess title="Our lead gen" highlightedTitle="process" steps={process} />

      <ServiceFAQ title="Lead Generation" highlightedTitle="FAQ" faqs={faqs} />

      <ServiceCTA
        title="Ready to fill"
        highlightedTitle="your pipeline?"
        description="Let's discuss how we can generate a consistent flow of qualified leads for your sales team."
      />

      <Footer />
    </main>
  )
}
