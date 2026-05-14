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
import { Shield, Lock, Eye, AlertTriangle, Server, FileSearch } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Security Audits",
    description:
      "Comprehensive security assessments to identify vulnerabilities, compliance gaps, and potential threats across your entire infrastructure.",
  },
  {
    icon: Lock,
    title: "Penetration Testing",
    description:
      "Ethical hacking to uncover security weaknesses before malicious actors do. We simulate real-world attacks to test your defenses.",
  },
  {
    icon: Eye,
    title: "24/7 Monitoring",
    description:
      "Continuous security monitoring with real-time threat detection, incident response, and automated remediation.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description:
      "Rapid response to security incidents with forensic analysis, containment, and recovery procedures to minimize damage.",
  },
  {
    icon: Server,
    title: "Infrastructure Hardening",
    description:
      "Secure your servers, networks, and cloud infrastructure with industry best practices and zero-trust architecture.",
  },
  {
    icon: FileSearch,
    title: "Compliance Management",
    description:
      "Achieve and maintain compliance with SOC 2, HIPAA, GDPR, PCI-DSS, and other regulatory requirements.",
  },
]

const benefits = [
  "Zero security breaches post-implementation",
  "100% compliance achievement rate",
  "24/7 security operations center",
  "Average 147 vulnerabilities fixed per audit",
  "Fortune 500 security standards",
]

const process = [
  {
    step: "01",
    title: "Assessment",
    description: "Comprehensive security audit to map your current security posture, identify assets, and uncover vulnerabilities.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Develop a prioritized remediation roadmap based on risk severity, business impact, and resource requirements.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Deploy security controls, harden infrastructure, and implement monitoring systems across your environment.",
  },
  {
    step: "04",
    title: "Continuous Protection",
    description: "Ongoing monitoring, regular testing, and continuous improvement to stay ahead of evolving threats.",
  },
]

const faqs = [
  {
    question: "What types of security assessments do you offer?",
    answer:
      "We offer vulnerability assessments, penetration testing (web, network, mobile, API), code reviews, cloud security audits, social engineering tests, and comprehensive security audits aligned with frameworks like NIST and ISO 27001.",
  },
  {
    question: "How do you handle sensitive data during assessments?",
    answer:
      "We follow strict data handling protocols including NDAs, encrypted communications, secure data storage, and complete data destruction after engagement. All our testers are background-checked and certified.",
  },
  {
    question: "Do you provide compliance consulting?",
    answer:
      "Yes, we help organizations achieve and maintain compliance with SOC 2, HIPAA, GDPR, PCI-DSS, ISO 27001, and industry-specific regulations. We provide gap assessments, remediation support, and audit preparation.",
  },
  {
    question: "What's included in your 24/7 monitoring service?",
    answer:
      "Our Security Operations Center provides continuous monitoring of your infrastructure, real-time threat detection, automated alerting, incident response, monthly reporting, and regular security reviews.",
  },
]

const stats = [
  { value: "0", label: "Breaches Post-Audit" },
  { value: "147", label: "Avg Vulnerabilities Fixed" },
  { value: "100%", label: "Compliance Rate" },
  { value: "24/7", label: "Monitoring" },
]

export default function CybersecurityPage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />

      <ServicePageHero
        title="Enterprise"
        highlightedTitle="Cybersecurity"
        description="Protect your business with comprehensive security solutions. From penetration testing to 24/7 monitoring, we defend against evolving cyber threats."
      />

      <ServiceOverview
        title="Secure your"
        highlightedTitle="digital assets"
        description="In today's threat landscape, security isn't optional—it's essential. Our cybersecurity experts protect your business with enterprise-grade solutions tailored to your specific risks."
        additionalDescription="We combine advanced technology with human expertise to detect, prevent, and respond to security threats. From startups to enterprises, we provide the security infrastructure you need to operate with confidence."
        stats={stats}
      />

      <ServiceFeatures title="Comprehensive" highlightedTitle="Security Services" features={features} />

      <ServiceBenefits
        title="Enterprise-grade"
        highlightedTitle="protection"
        benefits={benefits}
        highlightValue="0"
        highlightLabel="Security Breaches"
        highlightDescription="Our clients achieve zero security breaches after implementing our recommendations. We identify and fix vulnerabilities before they can be exploited."
      />

      <ServiceProcess title="Our security" highlightedTitle="approach" steps={process} />

      <ServiceFAQ title="Security" highlightedTitle="FAQ" faqs={faqs} />

      <ServiceCTA
        title="Protect your"
        highlightedTitle="business today"
        description="Don't wait for a breach. Let's discuss how we can strengthen your security posture and protect your valuable assets."
      />

      <Footer />
    </main>
  )
}
