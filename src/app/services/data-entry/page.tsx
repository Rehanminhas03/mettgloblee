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
import { FileText, Database, Calendar, Mail, Search, CheckCircle } from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Data Entry",
    description:
      "Accurate, fast data entry services for any format. From spreadsheets to CRM systems, we handle high-volume data with precision.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Clean, organize, and maintain your databases. Data validation, deduplication, and enrichment services.",
  },
  {
    icon: Calendar,
    title: "Administrative Support",
    description:
      "Calendar management, travel booking, expense reports, and general administrative tasks handled professionally.",
  },
  {
    icon: Mail,
    title: "Email Management",
    description:
      "Inbox zero achieved. Email filtering, response drafting, follow-up tracking, and priority management.",
  },
  {
    icon: Search,
    title: "Research Services",
    description:
      "Market research, competitive analysis, lead research, and data gathering from any sources you need.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description:
      "Multi-layer quality checks ensure 99.9% accuracy on all deliverables. Error-free work, every time.",
  },
]

const benefits = [
  "99.9% accuracy rate guaranteed",
  "70% cost reduction vs in-house",
  "Scalable team on demand",
  "Quick turnaround times",
  "Secure data handling protocols",
]

const process = [
  {
    step: "01",
    title: "Requirements Gathering",
    description: "Understand your specific needs, data types, systems, quality requirements, and turnaround expectations.",
  },
  {
    step: "02",
    title: "Team Assignment",
    description: "Assign and train dedicated virtual assistants based on your specific requirements and workflows.",
  },
  {
    step: "03",
    title: "Process Setup",
    description: "Establish workflows, quality checkpoints, communication channels, and reporting structures.",
  },
  {
    step: "04",
    title: "Execution & QA",
    description: "Execute tasks with rigorous quality assurance and continuous process improvement.",
  },
]

const faqs = [
  {
    question: "What types of data entry do you handle?",
    answer:
      "We handle all types of data entry including spreadsheet data, CRM updates, form processing, document digitization, invoice processing, product catalog entry, and custom database entry. Any structured or unstructured data.",
  },
  {
    question: "How do you ensure data accuracy?",
    answer:
      "We use a multi-layer quality assurance process including double-entry verification, automated validation checks, random sampling audits, and dedicated QA reviewers. We guarantee 99.9% accuracy.",
  },
  {
    question: "How do you handle confidential data?",
    answer:
      "All team members sign NDAs and follow strict data security protocols. We use encrypted connections, secure file transfer, and access controls. We can comply with HIPAA, GDPR, and other data protection requirements.",
  },
  {
    question: "Can I scale my team up or down?",
    answer:
      "Absolutely. We offer flexible scaling to match your workload. Add capacity for busy periods and scale back when things slow down—without the overhead of managing full-time employees.",
  },
]

const stats = [
  { value: "99.9%", label: "Accuracy Rate" },
  { value: "70%", label: "Cost Savings" },
  { value: "1M+", label: "Records Processed" },
  { value: "24hr", label: "Avg Turnaround" },
]

export default function DataEntryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />

      <ServicePageHero
        title="Data Entry &"
        highlightedTitle="Virtual Assistants"
        description="Accurate data entry and professional administrative support. Free your team to focus on what matters most."
      />

      <ServiceOverview
        title="Administrative"
        highlightedTitle="excellence"
        description="Stop wasting valuable time on repetitive tasks. Our skilled virtual assistants handle data entry, administrative work, and research with precision and professionalism."
        additionalDescription="From high-volume data entry to executive assistance, we provide the support you need to operate efficiently. Our team delivers 99.9% accuracy with fast turnaround times."
        stats={stats}
      />

      <ServiceFeatures title="Complete" highlightedTitle="Administrative Support" features={features} />

      <ServiceBenefits
        title="Work smarter,"
        highlightedTitle="not harder"
        benefits={benefits}
        highlightValue="99.9%"
        highlightLabel="Accuracy Guaranteed"
        highlightDescription="Our multi-layer quality assurance process ensures 99.9% accuracy on all data entry and administrative tasks. Your data is in safe hands."
      />

      <ServiceProcess title="How we" highlightedTitle="work together" steps={process} />

      <ServiceFAQ title="Data Entry & VA" highlightedTitle="FAQ" faqs={faqs} />

      <ServiceCTA
        title="Ready to reclaim"
        highlightedTitle="your time?"
        description="Let's discuss how our data entry and VA services can help you focus on growing your business."
      />

      <Footer />
    </main>
  )
}
