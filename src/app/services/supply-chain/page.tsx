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
import { Truck, Package, Globe, BarChart3, Clock, MapPin } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Freight Management",
    description:
      "Air, sea, and ground freight solutions optimized for cost and speed. Full container loads, LCL, and express options available.",
  },
  {
    icon: Package,
    title: "Warehouse & Fulfillment",
    description:
      "Strategic warehousing with inventory management, pick & pack services, and same-day fulfillment capabilities.",
  },
  {
    icon: Globe,
    title: "International Shipping",
    description:
      "Navigate global shipping complexities with our expertise in customs clearance, duties, and international regulations.",
  },
  {
    icon: BarChart3,
    title: "Supply Chain Analytics",
    description:
      "Data-driven insights to optimize routes, reduce costs, and improve delivery performance across your supply chain.",
  },
  {
    icon: Clock,
    title: "Just-in-Time Delivery",
    description:
      "Precise delivery scheduling to minimize inventory costs while ensuring products arrive exactly when needed.",
  },
  {
    icon: MapPin,
    title: "Last-Mile Delivery",
    description:
      "Efficient last-mile solutions including white-glove delivery, installation services, and customer scheduling.",
  },
]

const benefits = [
  "35% reduction in shipping costs",
  "98.5% on-time delivery rate",
  "Real-time tracking across all shipments",
  "Reduced inventory carrying costs",
  "Carbon-neutral shipping options",
]

const process = [
  {
    step: "01",
    title: "Supply Chain Audit",
    description: "Analyze your current logistics operations, identify inefficiencies, and map optimization opportunities.",
  },
  {
    step: "02",
    title: "Strategy Design",
    description: "Design an optimized supply chain strategy tailored to your products, markets, and business objectives.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Set up logistics infrastructure, integrate systems, and establish carrier relationships and processes.",
  },
  {
    step: "04",
    title: "Ongoing Optimization",
    description: "Continuous monitoring and optimization using analytics to improve performance and reduce costs.",
  },
]

const faqs = [
  {
    question: "What shipping methods do you offer?",
    answer:
      "We offer all major shipping methods including air freight, ocean freight (FCL and LCL), ground transportation, rail, and multimodal solutions. We recommend the optimal method based on your timeline and budget.",
  },
  {
    question: "Do you handle customs clearance?",
    answer:
      "Yes, we provide full customs brokerage services including documentation, duty calculation, compliance verification, and clearance for imports and exports in most major markets.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Absolutely. We integrate with major ERP systems, eCommerce platforms, and WMS solutions. Our API-first approach enables seamless data flow between your systems and our logistics platform.",
  },
  {
    question: "Do you offer warehousing services?",
    answer:
      "Yes, we provide strategic warehousing solutions with locations across major markets. Services include inventory management, pick & pack, kitting, returns processing, and value-added services.",
  },
]

const stats = [
  { value: "35%", label: "Cost Reduction" },
  { value: "98.5%", label: "On-Time Delivery" },
  { value: "150+", label: "Countries Served" },
  { value: "24/7", label: "Tracking & Support" },
]

export default function SupplyChainPage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />

      <ServicePageHero
        title="Supply Chain &"
        highlightedTitle="Logistics Excellence"
        description="End-to-end logistics solutions that optimize your supply chain. From freight management to last-mile delivery, we move your business forward."
      />

      <ServiceOverview
        title="Optimize your"
        highlightedTitle="logistics operations"
        description="A well-optimized supply chain is a competitive advantage. We provide comprehensive logistics solutions that reduce costs, improve delivery times, and enhance customer satisfaction."
        additionalDescription="Our global network of carriers, warehouses, and technology partners enables us to design and execute supply chain strategies that scale with your business and adapt to market changes."
        stats={stats}
      />

      <ServiceFeatures title="Complete" highlightedTitle="Logistics Services" features={features} />

      <ServiceBenefits
        title="Transform your"
        highlightedTitle="supply chain"
        benefits={benefits}
        highlightValue="35%"
        highlightLabel="Cost Reduction"
        highlightDescription="Our clients typically see a 35% reduction in shipping costs through route optimization, carrier negotiations, and strategic consolidation."
      />

      <ServiceProcess title="Our logistics" highlightedTitle="approach" steps={process} />

      <ServiceFAQ title="Logistics" highlightedTitle="FAQ" faqs={faqs} />

      <ServiceCTA
        title="Ready to optimize"
        highlightedTitle="your supply chain?"
        description="Let's analyze your logistics operations and show you how we can improve efficiency while reducing costs."
      />

      <Footer />
    </main>
  )
}
