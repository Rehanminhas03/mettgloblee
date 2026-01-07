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
import { Factory, Globe, CheckCircle, DollarSign, Truck, FileCheck } from "lucide-react"

const features = [
  {
    icon: Factory,
    title: "Manufacturing Sourcing",
    description:
      "Connect with verified manufacturers in Pakistan for textiles, sports goods, surgical instruments, leather products, and more.",
  },
  {
    icon: Globe,
    title: "Global Supplier Network",
    description:
      "Access our extensive network of vetted suppliers across industries, with established quality control processes.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description:
      "Rigorous quality control with on-site inspections, sample verification, and compliance documentation.",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description:
      "Leverage our local expertise and relationships to negotiate the best prices without compromising quality.",
  },
  {
    icon: Truck,
    title: "Logistics Coordination",
    description:
      "End-to-end shipping management including customs clearance, freight forwarding, and delivery tracking.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Documentation",
    description:
      "Complete documentation support including certificates, compliance reports, and import/export paperwork.",
  },
]

const benefits = [
  "40% average cost savings vs direct sourcing",
  "Verified, audited supplier network",
  "Quality inspection at every stage",
  "Transparent pricing with no hidden fees",
  "Dedicated account manager for every client",
]

const process = [
  {
    step: "01",
    title: "Requirements Analysis",
    description: "Understand your product specifications, quality standards, volume requirements, and budget parameters.",
  },
  {
    step: "02",
    title: "Supplier Selection",
    description: "Identify and vet potential suppliers from our network. Provide samples and detailed capability reports.",
  },
  {
    step: "03",
    title: "Negotiation & Contracting",
    description: "Handle all negotiations, contracts, and payment terms to ensure the best deal for your business.",
  },
  {
    step: "04",
    title: "Production & Delivery",
    description: "Monitor production, conduct quality inspections, and coordinate logistics for seamless delivery.",
  },
]

const faqs = [
  {
    question: "What products can you source from Pakistan?",
    answer:
      "Pakistan is known for textiles, sports goods, surgical instruments, leather products, rice, and handicrafts. We can source almost any manufactured product through our extensive network of verified suppliers.",
  },
  {
    question: "How do you ensure quality?",
    answer:
      "We conduct factory audits, sample inspections, in-production quality checks, and pre-shipment inspections. All suppliers in our network are vetted and regularly audited for quality and compliance.",
  },
  {
    question: "What are the minimum order quantities?",
    answer:
      "MOQs vary by product and supplier. We work to find suppliers that match your volume requirements, whether you need small test orders or large-scale production runs.",
  },
  {
    question: "How long does the procurement process take?",
    answer:
      "Timeline depends on product complexity and volume. Simple products might be 4-6 weeks from order to delivery, while custom manufacturing could take 8-12 weeks. We provide detailed timelines for every project.",
  },
]

const stats = [
  { value: "40%", label: "Cost Savings" },
  { value: "500+", label: "Verified Suppliers" },
  { value: "100%", label: "Quality Inspected" },
  { value: "50+", label: "Countries Served" },
]

export default function ProcurementPage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />

      <ServicePageHero
        title="Global"
        highlightedTitle="Procurement"
        description="Source quality products from Pakistan's manufacturing hub. From textiles to surgical instruments, we connect you with verified suppliers."
      />

      <ServiceOverview
        title="Streamline your"
        highlightedTitle="supply chain"
        description="Access Pakistan's manufacturing expertise through our established procurement network. We handle supplier vetting, quality control, and logistics so you can focus on growing your business."
        additionalDescription="With decades of combined experience and deep local relationships, we deliver significant cost savings while maintaining the quality standards your customers expect."
        stats={stats}
      />

      <ServiceFeatures title="End-to-End" highlightedTitle="Procurement Services" features={features} />

      <ServiceBenefits
        title="Why source"
        highlightedTitle="through us"
        benefits={benefits}
        highlightValue="40%"
        highlightLabel="Average Cost Savings"
        highlightDescription="Our clients typically save 40% compared to direct sourcing, thanks to our local expertise, established relationships, and efficient procurement processes."
      />

      <ServiceProcess title="Our procurement" highlightedTitle="process" steps={process} />

      <ServiceFAQ title="Procurement" highlightedTitle="FAQ" faqs={faqs} />

      <ServiceCTA
        title="Start sourcing"
        highlightedTitle="smarter today"
        description="Let's discuss your procurement needs and show you how we can reduce costs while ensuring quality."
      />

      <Footer />
    </main>
  )
}
