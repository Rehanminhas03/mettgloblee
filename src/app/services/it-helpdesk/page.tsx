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
import { Monitor, Wrench, Shield, Clock, Users, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: HeadphonesIcon,
    title: "Tier 1 Support",
    description:
      "First-line technical support for common issues including password resets, software troubleshooting, and basic hardware problems.",
  },
  {
    icon: Wrench,
    title: "Tier 2 Support",
    description:
      "Advanced troubleshooting for complex technical issues, system configurations, and escalated problems.",
  },
  {
    icon: Monitor,
    title: "Remote Support",
    description:
      "Secure remote access to diagnose and resolve issues quickly without on-site visits. Screen sharing and remote control capabilities.",
  },
  {
    icon: Shield,
    title: "Security Support",
    description:
      "Handle security-related incidents including malware removal, access issues, and security policy enforcement.",
  },
  {
    icon: Users,
    title: "User Management",
    description:
      "Account provisioning, access management, onboarding/offboarding support, and directory services administration.",
  },
  {
    icon: Clock,
    title: "24/7 Coverage",
    description:
      "Round-the-clock IT support ensures your employees get help whenever they need it, regardless of time zone.",
  },
]

const benefits = [
  "95% first-call resolution rate",
  "< 5 minute average response time",
  "24/7/365 technical support",
  "Certified IT professionals",
  "Cost savings vs in-house team",
]

const process = [
  {
    step: "01",
    title: "Environment Assessment",
    description: "Document your IT environment, tools, systems, and common support needs to build comprehensive knowledge base.",
  },
  {
    step: "02",
    title: "Team Training",
    description: "Train dedicated helpdesk agents on your specific environment, security policies, and support procedures.",
  },
  {
    step: "03",
    title: "System Integration",
    description: "Set up ticketing system, remote access tools, and integrate with your IT management platforms.",
  },
  {
    step: "04",
    title: "Launch & Optimize",
    description: "Go live with ongoing monitoring, knowledge base updates, and continuous process improvement.",
  },
]

const faqs = [
  {
    question: "What systems and software do you support?",
    answer:
      "We support Windows, macOS, and Linux environments, along with Microsoft 365, Google Workspace, major CRM and ERP systems, VPNs, and most common business applications. We can train on your specific tools.",
  },
  {
    question: "How do you handle escalations?",
    answer:
      "We have clear escalation paths for complex issues. Tier 2 handles advanced problems, and we can escalate to your internal IT team or vendors when needed. All escalations are tracked and followed up.",
  },
  {
    question: "What ticketing system do you use?",
    answer:
      "We can work with your existing ticketing system (ServiceNow, Zendesk, Freshdesk, etc.) or provide our own. All tickets are tracked with full documentation and SLA monitoring.",
  },
  {
    question: "How do you ensure security during remote support?",
    answer:
      "We use enterprise-grade remote access tools with encryption, require user consent for connections, log all sessions, and follow strict security protocols. Our team is background-checked and security-trained.",
  },
]

const stats = [
  { value: "95%", label: "First-Call Resolution" },
  { value: "<5min", label: "Response Time" },
  { value: "24/7", label: "Availability" },
  { value: "50%", label: "Cost Savings" },
]

export default function ITHelpdeskPage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />

      <ServicePageHero
        title="IT"
        highlightedTitle="Help Desk Services"
        description="Professional technical support that keeps your team productive. Remote troubleshooting and IT assistance available 24/7."
      />

      <ServiceOverview
        title="Keep your team"
        highlightedTitle="productive"
        description="Technical issues shouldn't slow your business down. Our IT helpdesk provides fast, professional support that resolves problems quickly and keeps your employees working."
        additionalDescription="From password resets to complex troubleshooting, our certified technicians handle it all. We integrate seamlessly with your existing IT infrastructure while significantly reducing support costs."
        stats={stats}
      />

      <ServiceFeatures title="Comprehensive" highlightedTitle="IT Support" features={features} />

      <ServiceBenefits
        title="IT support that"
        highlightedTitle="actually works"
        benefits={benefits}
        highlightValue="95%"
        highlightLabel="First-Call Resolution"
        highlightDescription="Our technicians resolve 95% of issues on the first call, minimizing downtime and frustration for your employees."
      />

      <ServiceProcess title="How we become" highlightedTitle="your IT team" steps={process} />

      <ServiceFAQ title="IT Helpdesk" highlightedTitle="FAQ" faqs={faqs} />

      <ServiceCTA
        title="Ready for better"
        highlightedTitle="IT support?"
        description="Let's discuss how our IT helpdesk can reduce costs and improve support quality for your organization."
      />

      <Footer />
    </main>
  )
}
