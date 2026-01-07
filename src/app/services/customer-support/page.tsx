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
import { Headphones, MessageCircle, Phone, Mail, Clock, Star } from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "Voice Support",
    description:
      "Professional phone support with trained agents who represent your brand with excellence. Inbound and outbound capabilities.",
  },
  {
    icon: MessageCircle,
    title: "Live Chat Support",
    description:
      "Real-time chat support across your website and apps. Quick response times and seamless customer conversations.",
  },
  {
    icon: Mail,
    title: "Email Support",
    description:
      "Comprehensive email management with fast response times, escalation handling, and ticket resolution tracking.",
  },
  {
    icon: Headphones,
    title: "Social Media Support",
    description:
      "Monitor and respond to customer inquiries across all social platforms. Protect your brand reputation online.",
  },
  {
    icon: Clock,
    title: "24/7 Coverage",
    description:
      "Round-the-clock support coverage across all time zones. Your customers get help whenever they need it.",
  },
  {
    icon: Star,
    title: "Quality Assurance",
    description:
      "Rigorous QA processes ensure consistent, high-quality interactions that meet your brand standards.",
  },
]

const benefits = [
  "98% customer satisfaction rate",
  "< 30 second average response time",
  "24/7/365 support coverage",
  "Multi-language capabilities",
  "Dedicated trained agents",
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Understand your brand, products, customers, and support requirements to design the perfect solution.",
  },
  {
    step: "02",
    title: "Team Setup",
    description: "Recruit, train, and certify dedicated support agents on your products, processes, and brand voice.",
  },
  {
    step: "03",
    title: "Integration",
    description: "Set up systems, integrate with your helpdesk and CRM, and establish communication workflows.",
  },
  {
    step: "04",
    title: "Launch & Optimize",
    description: "Go live with continuous monitoring, quality assurance, and ongoing optimization based on metrics.",
  },
]

const faqs = [
  {
    question: "What channels do you support?",
    answer:
      "We provide omnichannel support including phone, email, live chat, social media (Facebook, Twitter, Instagram), SMS, and in-app messaging. We can integrate with your existing channels or set up new ones.",
  },
  {
    question: "How do you train agents on our products?",
    answer:
      "We conduct comprehensive training programs including product knowledge, brand voice, common issues, escalation procedures, and tool training. We also provide ongoing training as your products evolve.",
  },
  {
    question: "Can you support multiple languages?",
    answer:
      "Yes, we offer support in English, Spanish, French, German, and many other languages. We can build multilingual teams based on your customer demographics.",
  },
  {
    question: "How do you ensure quality?",
    answer:
      "We have dedicated QA teams that monitor calls, chats, and emails. We track KPIs including CSAT, response time, resolution rate, and provide regular performance reports and coaching.",
  },
]

const stats = [
  { value: "98%", label: "CSAT Score" },
  { value: "<30s", label: "Response Time" },
  { value: "24/7", label: "Coverage" },
  { value: "15+", label: "Languages" },
]

export default function CustomerSupportPage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />

      <ServicePageHero
        title="24/7"
        highlightedTitle="Customer Support"
        description="Exceptional customer experiences across every channel. Our trained support teams become an extension of your brand."
      />

      <ServiceOverview
        title="Elevate your"
        highlightedTitle="customer experience"
        description="Great customer support is a competitive advantage. We provide dedicated, trained support teams that deliver exceptional experiences and protect your brand reputation."
        additionalDescription="From phone and email to chat and social media, our omnichannel support ensures your customers get help however they prefer to reach out—24 hours a day, 7 days a week."
        stats={stats}
      />

      <ServiceFeatures title="Omnichannel" highlightedTitle="Support Solutions" features={features} />

      <ServiceBenefits
        title="Support that"
        highlightedTitle="delights customers"
        benefits={benefits}
        highlightValue="98%"
        highlightLabel="Customer Satisfaction"
        highlightDescription="Our support teams consistently achieve 98% customer satisfaction scores through quality training, monitoring, and continuous improvement."
      />

      <ServiceProcess title="How we build" highlightedTitle="your support team" steps={process} />

      <ServiceFAQ title="Support Services" highlightedTitle="FAQ" faqs={faqs} />

      <ServiceCTA
        title="Ready to transform"
        highlightedTitle="customer support?"
        description="Let's discuss how our support teams can help you deliver exceptional customer experiences."
      />

      <Footer />
    </main>
  )
}
