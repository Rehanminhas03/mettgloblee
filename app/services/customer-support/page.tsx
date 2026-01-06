"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Headphones, MessageSquare, Clock, CheckCircle, Shield, CheckCircle2 } from "lucide-react"

const services = [
  {
    icon: MessageSquare,
    title: "24/7 Support",
    description: "Round-the-clock customer support across all channels. Never miss a customer inquiry, day or night.",
  },
  {
    icon: Headphones,
    title: "Multi-Channel Support",
    description: "Email, chat, phone, social media, and ticket management. Unified support across all customer touchpoints.",
  },
  {
    icon: CheckCircle,
    title: "Ticket Management",
    description: "Efficient ticket routing, prioritization, and resolution tracking. Ensure every customer issue is addressed promptly.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Regular quality monitoring, training, and performance reviews to maintain exceptional service standards.",
  },
  {
    icon: Clock,
    title: "Response Time SLA",
    description: "Guaranteed response times and resolution SLAs. We commit to meeting your customer service standards.",
  },
  {
    icon: MessageSquare,
    title: "Customer Success",
    description: "Proactive customer success management, onboarding, and retention strategies to maximize lifetime value.",
  },
]

const benefits = [
  "24/7 availability",
  "95% customer satisfaction",
  "Multi-language support",
  "Expert support team",
  "Scalable operations",
]

const process = [
  {
    step: "01",
    title: "Setup & Training",
    description: "Configure support systems, train team on your products/services, and establish processes.",
  },
  {
    step: "02",
    title: "Channel Integration",
    description: "Integrate all support channels, set up ticketing systems, and establish communication workflows.",
  },
  {
    step: "03",
    title: "Launch & Monitor",
    description: "Go live with support services and continuously monitor performance and customer satisfaction.",
  },
  {
    step: "04",
    title: "Optimization",
    description: "Regular reviews, training updates, and process improvements to enhance service quality.",
  },
]

const faqs = [
  {
    question: "What support channels do you handle?",
    answer: "We handle all major support channels including email, live chat, phone, social media (Facebook, Twitter, Instagram), and help desk tickets. We provide unified support across all touchpoints.",
  },
  {
    question: "What languages do you support?",
    answer: "We provide support in English and can accommodate other languages based on your needs. Our team includes multilingual support agents.",
  },
  {
    question: "How quickly do you respond?",
    answer: "Response times depend on your SLA requirements. We typically respond within 1 hour for email, within minutes for chat, and immediately for phone support. We customize SLAs to match your standards.",
  },
  {
    question: "Do you handle product returns and refunds?",
    answer: "Yes, we handle the complete customer service lifecycle including returns, refunds, exchanges, and order inquiries. We follow your policies and procedures.",
  },
]

export default function CustomerSupportServicePage() {
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
              <span className="text-foreground/90">Customer</span>
              <br />
              <span className="text-gradient">Support</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-12">
              24/7 multi-channel customer support for retail, eCommerce, and technology businesses. Deliver exceptional
              customer experiences that build loyalty.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 px-10 py-5 text-sm tracking-wider uppercase rounded-2xl glass-card hover:glow-primary transition-all duration-700"
            >
              Get Support Team
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
                <span className="text-foreground/90">Exceptional support</span> <span className="text-gradient">24/7</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Customer support is a competitive advantage. We provide 24/7 multi-channel support that ensures your
                customers always receive timely, helpful assistance. Our expert team handles everything from simple
                inquiries to complex issues.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With support across email, chat, phone, and social media, we ensure consistent, high-quality service
                that builds customer loyalty. Our clients typically achieve 95% customer satisfaction rates while
                reducing support costs.
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
                { value: "95%", label: "Satisfaction" },
                { value: "24/7", label: "Availability" },
                { value: "<1hr", label: "Response Time" },
                { value: "100%", label: "Coverage" },
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
              <span className="text-foreground/90">Complete</span> <span className="text-gradient">Support Services</span>
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
                <span className="text-gradient">95% satisfaction,</span> <span className="text-foreground/90">always available</span>
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
              <div className="text-6xl font-bold text-gradient mb-4">95%</div>
              <p className="text-xl text-foreground/90 mb-6">Customer Satisfaction</p>
              <p className="text-muted-foreground leading-relaxed">
                Our clients consistently achieve 95% customer satisfaction rates. Our expert team, comprehensive
                training, and quality assurance processes ensure exceptional service delivery.
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
              <span className="text-foreground/90">How we</span> <span className="text-gradient">support</span>
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
              <span className="text-foreground/90">Ready to elevate your</span> <span className="text-gradient">customer support?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can provide 24/7 exceptional customer support that builds loyalty and satisfaction.
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

