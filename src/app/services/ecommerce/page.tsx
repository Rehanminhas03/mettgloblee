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
import { ShoppingCart, TrendingUp, BarChart3, Package, Target, Zap } from "lucide-react"

const features = [
  {
    icon: ShoppingCart,
    title: "Marketplace Management",
    description:
      "Complete management across Amazon, Walmart, eBay, Shopify, and more. We handle everything from account setup to daily operations.",
  },
  {
    icon: TrendingUp,
    title: "Product Listing Optimization",
    description:
      "SEO-optimized listings with compelling copy, high-converting images, and A+ content that drives sales and improves rankings.",
  },
  {
    icon: BarChart3,
    title: "PPC Advertising",
    description:
      "Strategic Amazon PPC campaigns, Walmart Sponsored Products, and multi-channel advertising to maximize ROI and sales velocity.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Real-time inventory tracking, forecasting, and replenishment strategies to prevent stockouts and optimize cash flow.",
  },
  {
    icon: Target,
    title: "Brand Protection",
    description:
      "Monitor and protect your brand from counterfeiters, unauthorized sellers, and IP violations across all marketplaces.",
  },
  {
    icon: Zap,
    title: "Performance Analytics",
    description:
      "Comprehensive dashboards and reporting to track KPIs, identify opportunities, and make data-driven decisions.",
  },
]

const benefits = [
  "320% average revenue increase in 6 months",
  "50% reduction in advertising costs",
  "24/7 marketplace monitoring and optimization",
  "Multi-channel expansion support",
  "Expert team with 10+ years experience",
]

const process = [
  {
    step: "01",
    title: "Account Audit",
    description: "Comprehensive analysis of your current marketplace presence, listings, and performance metrics.",
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Custom growth strategy tailored to your products, target markets, and business goals.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Optimize listings, launch campaigns, and set up automated systems for ongoing management.",
  },
  {
    step: "04",
    title: "Optimization",
    description: "Continuous monitoring, A/B testing, and optimization to maximize performance and ROI.",
  },
]

const faqs = [
  {
    question: "Which marketplaces do you support?",
    answer:
      "We manage accounts across Amazon (US, UK, EU, CA, AU), Walmart, eBay, Shopify, Etsy, and other major platforms. We can help you expand to new marketplaces strategically.",
  },
  {
    question: "How quickly can I see results?",
    answer:
      "Most clients see improvements within 30 days, with significant revenue growth typically visible within 3-6 months. Results vary based on product category, competition, and current performance.",
  },
  {
    question: "Do you handle customer service?",
    answer:
      "Yes, we offer comprehensive customer support services including message management, returns processing, and review management to maintain high seller ratings.",
  },
  {
    question: "What reporting do you provide?",
    answer:
      "We provide weekly performance reports, monthly strategy reviews, and real-time dashboards. You'll have full visibility into sales, advertising spend, inventory, and key metrics.",
  },
]

const stats = [
  { value: "320%", label: "Avg Revenue Increase" },
  { value: "50%", label: "Cost Reduction" },
  { value: "500+", label: "Products Managed" },
  { value: "24/7", label: "Support" },
]

export default function EcommerceServicePage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />

      <ServicePageHero
        title="Amazon &"
        highlightedTitle="eCommerce Excellence"
        description="Multi-channel eCommerce management, marketplace optimization, and growth strategies that drive revenue. From Amazon FBA to Shopify stores, we scale your online business."
      />

      <ServiceOverview
        title="Scale your"
        highlightedTitle="online business"
        description="We provide end-to-end eCommerce management services that transform your marketplace presence. Our team handles everything from product listing optimization to PPC campaigns, inventory management, and customer service."
        additionalDescription="With expertise across Amazon, Walmart, eBay, Shopify, and more, we help brands expand their reach, increase sales velocity, and build sustainable eCommerce operations. Our data-driven approach ensures every decision maximizes ROI."
        stats={stats}
      />

      <ServiceFeatures title="Comprehensive" highlightedTitle="eCommerce Services" features={features} />

      <ServiceBenefits
        title="Proven results"
        highlightedTitle="that matter"
        benefits={benefits}
        highlightValue="320%"
        highlightLabel="Average Revenue Increase"
        highlightDescription="Our clients typically see a 320% increase in revenue within 6 months of working with us. This comes from optimized listings, strategic advertising, and comprehensive marketplace management."
      />

      <ServiceProcess title="How we" highlightedTitle="work" steps={process} />

      <ServiceFAQ title="Frequently asked" highlightedTitle="questions" faqs={faqs} />

      <ServiceCTA
        title="Ready to scale your"
        highlightedTitle="eCommerce business?"
        description="Let's discuss how we can help you achieve 300%+ revenue growth with our comprehensive eCommerce management services."
      />

      <Footer />
    </main>
  )
}
