"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Users, Mail, Database, Calendar, Target, CheckCircle2 } from "lucide-react"

const services = [
  {
    icon: Database,
    title: "Lead Research",
    description: "Comprehensive B2B lead research using advanced tools and databases. Identify decision-makers and qualified prospects.",
  },
  {
    icon: Mail,
    title: "Email Outreach",
    description: "Personalized email campaigns, sequence automation, and follow-up strategies that convert prospects into customers.",
  },
  {
    icon: Users,
    title: "CRM Management",
    description: "Complete CRM setup, data management, pipeline tracking, and sales process optimization for your team.",
  },
  {
    icon: Calendar,
    title: "Appointment Setting",
    description: "Qualified appointment setting and calendar management. Get your sales team in front of ready-to-buy prospects.",
  },
  {
    icon: Target,
    title: "LinkedIn Outreach",
    description: "Strategic LinkedIn campaigns, connection requests, and messaging to engage B2B prospects on the platform.",
  },
  {
    icon: Database,
    title: "Data Enrichment",
    description: "Enhance your database with accurate contact information, company data, and firmographic details.",
  },
]

const benefits = [
  "3x increase in qualified leads",
  "40% higher conversion rates",
  "Fully managed sales pipeline",
  "Expert B2B outreach strategies",
  "Scalable lead generation",
]

const process = [
  {
    step: "01",
    title: "Target Definition",
    description: "Define your ideal customer profile, target markets, and qualification criteria for lead generation.",
  },
  {
    step: "02",
    title: "Lead Research",
    description: "Research and identify qualified prospects using advanced tools and databases.",
  },
  {
    step: "03",
    title: "Outreach Campaigns",
    description: "Execute multi-channel outreach campaigns via email, LinkedIn, and other channels.",
  },
  {
    step: "04",
    title: "Pipeline Management",
    description: "Manage leads through CRM, nurture prospects, and schedule qualified appointments.",
  },
]

const faqs = [
  {
    question: "What industries do you serve?",
    answer: "We serve B2B businesses across various industries including SaaS, technology, professional services, manufacturing, and more. Our strategies are tailored to each industry's unique characteristics.",
  },
  {
    question: "How many leads can I expect?",
    answer: "Lead volume depends on your target market, industry, and campaign scope. We typically deliver 50-500 qualified leads per month, with conversion rates 3x higher than industry average.",
  },
  {
    question: "Do you handle the entire sales process?",
    answer: "We handle lead research, outreach, qualification, and appointment setting. Your sales team takes over for closing deals. We can also provide CRM management and pipeline optimization.",
  },
  {
    question: "What tools do you use?",
    answer: "We use industry-leading tools including Salesforce, HubSpot, LinkedIn Sales Navigator, email automation platforms, and data enrichment services to maximize results.",
  },
]

export default function LeadGenerationServicePage() {
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
              <span className="text-foreground/90">B2B Lead</span>
              <br />
              <span className="text-gradient">Generation</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-12">
              Data-driven lead generation, sales pipelines, CRM management, and appointment setting for B2B businesses.
              Fill your pipeline with qualified prospects.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 px-10 py-5 text-sm tracking-wider uppercase rounded-2xl glass-card hover:glow-primary transition-all duration-700"
            >
              Generate Leads
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
                <span className="text-foreground/90">Fill your pipeline</span> <span className="text-gradient">with quality leads</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Consistent, qualified leads are the lifeblood of B2B sales. We provide end-to-end lead generation
                services that identify, engage, and qualify prospects, ensuring your sales team spends time closing
                deals, not searching for leads.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our data-driven approach combines advanced research tools, personalized outreach, and CRM management to
                deliver 3x more qualified leads than industry average. We handle everything from lead research to
                appointment setting.
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
                { value: "3x", label: "More Leads" },
                { value: "40%", label: "Higher Conversion" },
                { value: "500+", label: "Leads/Month" },
                { value: "24/7", label: "Pipeline" },
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
              <span className="text-foreground/90">Complete</span> <span className="text-gradient">Lead Generation</span>
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
                <span className="text-gradient">3x more leads,</span> <span className="text-foreground/90">higher conversion</span>
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
              <div className="text-6xl font-bold text-gradient mb-4">3x</div>
              <p className="text-xl text-foreground/90 mb-6">More Qualified Leads</p>
              <p className="text-muted-foreground leading-relaxed">
                Our clients see 3x more qualified leads compared to industry average, with 40% higher conversion rates.
                Our data-driven approach and personalized outreach deliver results that matter.
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
              <span className="text-foreground/90">How we</span> <span className="text-gradient">generate leads</span>
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
              <span className="text-foreground/90">Ready to fill your</span> <span className="text-gradient">sales pipeline?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can generate 3x more qualified leads for your business.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold rounded-2xl bg-primary text-primary-foreground hover:glow-primary transition-all duration-500"
            >
              Get Free Consultation
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

