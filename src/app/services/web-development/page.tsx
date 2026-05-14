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
import { Code, Smartphone, Zap, Database, Shield, Palette } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Custom Web Applications",
    description:
      "Bespoke web applications built with modern frameworks like Next.js, React, and Node.js. Scalable architecture designed for growth.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Pixel-perfect, mobile-first designs that look stunning on every device. Optimized for performance and user experience.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Lightning-fast load times with Core Web Vitals optimization, lazy loading, and efficient caching strategies.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Robust APIs, database design, and server architecture. We build scalable backends that handle millions of requests.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Enterprise-grade security built into every project. OWASP compliance, penetration testing, and secure coding practices.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that converts. From wireframes to polished interfaces, we create experiences users love.",
  },
]

const benefits = [
  "200% average improvement in page load speed",
  "40% increase in conversion rates",
  "99.9% uptime guarantee",
  "Full SEO optimization included",
  "Ongoing maintenance and support",
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Deep dive into your business goals, target audience, and technical requirements to define the perfect solution.",
  },
  {
    step: "02",
    title: "Design",
    description: "Create wireframes, prototypes, and polished UI designs. Iterate based on your feedback until perfect.",
  },
  {
    step: "03",
    title: "Development",
    description: "Agile development with regular demos and deployments. Full transparency throughout the build process.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Comprehensive testing, deployment, and ongoing maintenance to ensure long-term success.",
  },
]

const faqs = [
  {
    question: "What technologies do you work with?",
    answer:
      "We specialize in modern web technologies including Next.js, React, TypeScript, Node.js, Python, PostgreSQL, and cloud platforms like AWS, Vercel, and GCP. We choose the best stack for each project's needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A landing page might take 2-4 weeks, while a full web application could be 2-6 months. We provide detailed timelines during the discovery phase.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes, we offer flexible maintenance packages including security updates, feature enhancements, performance monitoring, and 24/7 support for critical issues.",
  },
  {
    question: "Can you work with our existing systems?",
    answer:
      "Absolutely. We regularly integrate with existing platforms, APIs, CRMs, and databases. We can also modernize legacy systems incrementally without disrupting your operations.",
  },
]

const stats = [
  { value: "200%", label: "Speed Improvement" },
  { value: "40%", label: "Conversion Increase" },
  { value: "100+", label: "Projects Delivered" },
  { value: "99.9%", label: "Uptime" },
]

export default function WebDevelopmentPage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />

      <ServicePageHero
        title="Modern"
        highlightedTitle="Web Development"
        description="Custom web applications built with cutting-edge technology. From stunning landing pages to complex enterprise platforms, we bring your vision to life."
      />

      <ServiceOverview
        title="Build your"
        highlightedTitle="digital presence"
        description="We create powerful web experiences that drive business growth. Our team combines technical excellence with creative design to deliver websites and applications that perform."
        additionalDescription="Using modern frameworks like Next.js, React, and Node.js, we build fast, secure, and scalable solutions. Every project is optimized for performance, SEO, and user experience from day one."
        stats={stats}
      />

      <ServiceFeatures title="Full-Stack" highlightedTitle="Development Services" features={features} />

      <ServiceBenefits
        title="Results that"
        highlightedTitle="drive growth"
        benefits={benefits}
        highlightValue="200%"
        highlightLabel="Speed Improvement"
        highlightDescription="Our performance optimization typically results in 200% faster load times, leading to better user engagement, higher SEO rankings, and increased conversions."
      />

      <ServiceProcess title="Our development" highlightedTitle="process" steps={process} />

      <ServiceFAQ title="Common" highlightedTitle="questions" faqs={faqs} />

      <ServiceCTA
        title="Ready to build"
        highlightedTitle="something amazing?"
        description="Let's discuss your project and create a web experience that sets you apart from the competition."
      />

      <Footer />
    </main>
  )
}
