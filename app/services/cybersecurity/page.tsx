"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Shield, Lock, Eye, FileCheck, AlertTriangle, CheckCircle2 } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Penetration Testing",
    description: "Comprehensive security assessments to identify vulnerabilities before attackers do. We test your systems, networks, and applications.",
  },
  {
    icon: Lock,
    title: "Security Audits",
    description: "Thorough security audits covering infrastructure, applications, policies, and compliance requirements. Detailed reports with actionable recommendations.",
  },
  {
    icon: FileCheck,
    title: "Compliance Management",
    description: "Help achieve and maintain compliance with GDPR, HIPAA, SOC 2, PCI-DSS, and other regulatory requirements.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "24/7 incident response services. Rapid detection, containment, and recovery from security breaches and cyber attacks.",
  },
  {
    icon: Eye,
    title: "Security Monitoring",
    description: "Continuous security monitoring, threat detection, and real-time alerts. Protect your business around the clock.",
  },
  {
    icon: Lock,
    title: "Security Training",
    description: "Employee security awareness training and phishing simulations to build a security-first culture in your organization.",
  },
]

const benefits = [
  "Zero security incidents post-implementation",
  "24/7 threat monitoring and response",
  "Compliance with major regulations",
  "Expert team with security certifications",
  "Proactive threat prevention",
]

const process = [
  {
    step: "01",
    title: "Security Assessment",
    description: "Comprehensive evaluation of your current security posture, identifying risks and vulnerabilities.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Develop customized security strategy and roadmap aligned with your business goals and compliance needs.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Deploy security solutions, configure systems, and establish monitoring and response procedures.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description: "Continuous monitoring, regular audits, and proactive security management to maintain protection.",
  },
]

const faqs = [
  {
    question: "What security certifications do you have?",
    answer: "Our team holds certifications including CISSP, CEH, CISM, and other industry-recognized credentials. We stay current with the latest security threats and best practices.",
  },
  {
    question: "How quickly can you respond to a security incident?",
    answer: "Our incident response team is available 24/7 and can begin containment within minutes of detection. We provide rapid response services to minimize damage and restore operations quickly.",
  },
  {
    question: "Do you help with compliance requirements?",
    answer: "Yes, we help businesses achieve and maintain compliance with GDPR, HIPAA, SOC 2, PCI-DSS, ISO 27001, and other regulatory frameworks. We conduct audits and provide documentation support.",
  },
  {
    question: "What types of businesses do you serve?",
    answer: "We serve businesses of all sizes, from startups to enterprises, across industries including healthcare, finance, e-commerce, and technology. Our solutions are tailored to each client's specific needs.",
  },
]

export default function CybersecurityServicePage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
              <span className="text-foreground/90">Cybersecurity</span>
              <br />
              <span className="text-gradient">Protection</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-12">
              Enterprise-grade security solutions including penetration testing, security audits, incident response, and
              compliance management. Protect your business from cyber threats.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 px-10 py-5 text-sm tracking-wider uppercase rounded-2xl glass-card hover:glow-primary transition-all duration-700"
            >
              Secure Your Business
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-sm font-mono text-primary tracking-wider uppercase">Overview</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="text-foreground/90">Protect your</span> <span className="text-gradient">digital assets</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In today's digital landscape, cybersecurity is not optional—it's essential. We provide comprehensive
                security services that protect your business from evolving cyber threats, ensure compliance, and give you
                peace of mind.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our certified security experts conduct thorough assessments, implement robust security measures, and
                provide 24/7 monitoring to keep your business safe. We've helped businesses achieve zero security
                incidents and maintain compliance with major regulations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "0", label: "Security Incidents" },
                { value: "24/7", label: "Monitoring" },
                { value: "100%", label: "Compliance Rate" },
                { value: "<5min", label: "Response Time" },
              ].map((stat, index) => (
                <div key={stat.label} className="p-6 rounded-2xl glass-card">
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-mono text-primary tracking-wider uppercase">What We Offer</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-foreground/90">Comprehensive</span> <span className="text-gradient">Security Services</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl glass hover:glass-strong transition-all duration-500 hover:glow-border"
              >
                <div className="p-4 rounded-xl glass-subtle w-fit mb-6">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground/90 mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-sm font-mono text-primary tracking-wider uppercase">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                <span className="text-gradient">Zero incidents</span> <span className="text-foreground/90">guarantee</span>
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-foreground/90">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-10 rounded-3xl glass-strong"
            >
              <div className="text-6xl font-bold text-gradient mb-4">0</div>
              <p className="text-xl text-foreground/90 mb-6">Security Incidents</p>
              <p className="text-muted-foreground leading-relaxed">
                Our clients experience zero security incidents post-implementation. Our proactive approach, comprehensive
                security measures, and 24/7 monitoring ensure your business stays protected.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-mono text-primary tracking-wider uppercase">Our Process</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-foreground/90">How we</span> <span className="text-gradient">secure</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-8 rounded-2xl glass hover:glass-strong transition-all duration-500">
                  <div className="text-4xl font-bold text-gradient mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-foreground/90 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-mono text-primary tracking-wider uppercase">FAQ</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-foreground/90">Frequently asked</span> <span className="text-gradient">questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl glass hover:glass-strong transition-all duration-500"
              >
                <h3 className="text-xl font-bold text-foreground/90 mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center p-16 rounded-3xl glass-strong"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-foreground/90">Ready to secure your</span> <span className="text-gradient">business?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your security needs and create a comprehensive protection strategy for your business.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold rounded-2xl bg-primary text-primary-foreground hover:glow-primary transition-all duration-500"
            >
              Get Security Assessment
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

