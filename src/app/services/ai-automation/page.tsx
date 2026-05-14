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
import { Brain, Bot, Workflow, Zap, MessageSquare, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description:
      "Intelligent conversational AI that handles customer inquiries, support tickets, and sales conversations 24/7.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks and business processes with custom automation solutions that save time and reduce errors.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Custom ML models for predictions, recommendations, anomaly detection, and data-driven decision making.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description:
      "RPA solutions that automate data entry, document processing, and system integrations across your tech stack.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description:
      "Extract insights from text, automate document analysis, and build intelligent search and classification systems.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description:
      "Forecast trends, predict customer behavior, and optimize operations with AI-powered analytics.",
  },
]

const benefits = [
  "75% reduction in response time",
  "60% cost savings on repetitive tasks",
  "24/7 automated customer support",
  "94% customer satisfaction rate",
  "Seamless integration with existing systems",
]

const process = [
  {
    step: "01",
    title: "Assessment",
    description: "Identify automation opportunities and AI use cases that deliver the highest ROI for your business.",
  },
  {
    step: "02",
    title: "Design",
    description: "Design AI solutions and automation workflows tailored to your specific requirements and systems.",
  },
  {
    step: "03",
    title: "Development",
    description: "Build, train, and test AI models and automation scripts with rigorous quality assurance.",
  },
  {
    step: "04",
    title: "Deployment & Optimization",
    description: "Deploy solutions, monitor performance, and continuously improve based on real-world results.",
  },
]

const faqs = [
  {
    question: "What types of AI solutions do you offer?",
    answer:
      "We offer conversational AI (chatbots), machine learning models, natural language processing, computer vision, predictive analytics, and robotic process automation. We recommend solutions based on your specific business needs.",
  },
  {
    question: "How long does it take to implement an AI chatbot?",
    answer:
      "A basic chatbot can be deployed in 2-4 weeks. More sophisticated AI assistants with custom training and integrations typically take 6-12 weeks depending on complexity and scope.",
  },
  {
    question: "Can AI solutions integrate with our existing tools?",
    answer:
      "Yes, we build integrations with CRMs, helpdesk systems, communication platforms, ERPs, and custom applications. Our solutions work within your existing tech stack.",
  },
  {
    question: "What ROI can we expect from automation?",
    answer:
      "Most clients see 60-80% cost reduction on automated tasks, with ROI typically achieved within 6 months. We provide detailed ROI projections during the assessment phase.",
  },
]

const stats = [
  { value: "75%", label: "Response Time Cut" },
  { value: "60%", label: "Cost Savings" },
  { value: "94%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Availability" },
]

export default function AIAutomationPage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />

      <ServicePageHero
        title="AI &"
        highlightedTitle="Intelligent Automation"
        description="Transform your operations with AI-powered solutions. From chatbots to workflow automation, we help you work smarter, not harder."
      />

      <ServiceOverview
        title="Automate and"
        highlightedTitle="accelerate"
        description="Artificial intelligence isn't just for tech giants. We make AI accessible and practical for businesses of all sizes, delivering automation solutions that generate real ROI."
        additionalDescription="Our AI solutions handle repetitive tasks, provide 24/7 customer support, and deliver insights that drive better decisions—freeing your team to focus on high-value work."
        stats={stats}
      />

      <ServiceFeatures title="AI-Powered" highlightedTitle="Solutions" features={features} />

      <ServiceBenefits
        title="Intelligent"
        highlightedTitle="efficiency"
        benefits={benefits}
        highlightValue="75%"
        highlightLabel="Response Time Reduction"
        highlightDescription="Our AI solutions typically reduce response times by 75% while maintaining or improving customer satisfaction through instant, accurate responses."
      />

      <ServiceProcess title="Our AI" highlightedTitle="implementation process" steps={process} />

      <ServiceFAQ title="AI & Automation" highlightedTitle="FAQ" faqs={faqs} />

      <ServiceCTA
        title="Ready to embrace"
        highlightedTitle="AI automation?"
        description="Let's explore how AI can transform your operations, reduce costs, and deliver better experiences."
      />

      <Footer />
    </main>
  )
}
