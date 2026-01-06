"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Code, Globe, Smartphone, Zap, Shield, Layers, CheckCircle2 } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Custom Web Applications",
    description: "Full-stack web applications built with React, Next.js, Node.js, and modern frameworks. Scalable, performant, and user-centric.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive websites and progressive web apps that deliver exceptional experiences across all devices and screen sizes.",
  },
  {
    icon: Code,
    title: "E-commerce Platforms",
    description: "Custom e-commerce solutions with Shopify, WooCommerce, or custom builds. Payment integration, inventory management, and more.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast load times, SEO optimization, and Core Web Vitals improvements that boost rankings and conversions.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security, SSL certificates, GDPR compliance, and regular security audits to protect your business.",
  },
  {
    icon: Layers,
    title: "API Development",
    description: "RESTful and GraphQL APIs, microservices architecture, and third-party integrations to power your applications.",
  },
]

const benefits = [
  "50% faster load times on average",
  "Mobile-first responsive design",
  "SEO-optimized for better rankings",
  "Enterprise-grade security",
  "Scalable architecture for growth",
]

const technologies = [
  "Next.js & React",
  "Node.js & Express",
  "TypeScript",
  "PostgreSQL & MongoDB",
  "AWS & Cloud Infrastructure",
  "Docker & CI/CD",
]

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understand your goals, target audience, and technical requirements. Create detailed project roadmap.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Create wireframes, UI/UX designs, and interactive prototypes for stakeholder approval.",
  },
  {
    step: "03",
    title: "Development",
    description: "Build your application using best practices, clean code, and modern development workflows.",
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Comprehensive testing, performance optimization, and smooth deployment to production.",
  },
]

const faqs = [
  {
    question: "What technologies do you use?",
    answer: "We specialize in modern tech stacks including Next.js, React, Node.js, TypeScript, and cloud platforms like AWS. We choose the best technology for your specific project needs.",
  },
  {
    question: "How long does development take?",
    answer: "Timeline varies by project complexity. Simple websites take 2-4 weeks, custom web applications typically 8-16 weeks, and enterprise solutions 3-6 months. We provide detailed timelines during discovery.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes, we offer maintenance packages including security updates, bug fixes, performance monitoring, and feature additions. We ensure your application stays secure and up-to-date.",
  },
  {
    question: "Can you integrate with existing systems?",
    answer: "Absolutely. We specialize in API integrations, third-party service connections, and legacy system modernization. We'll seamlessly connect your new application with existing infrastructure.",
  },
]

export default function WebDevelopmentServicePage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
              <span className="text-foreground/90">Web</span>
              <br />
              <span className="text-gradient">Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-12">
              Modern, scalable, high-performance websites and applications built with cutting-edge technologies. From
              simple landing pages to complex enterprise solutions.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 px-10 py-5 text-sm tracking-wider uppercase rounded-2xl glass-card hover:glow-primary transition-all duration-700"
            >
              Start Your Project
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
                <span className="text-foreground/90">Build powerful</span> <span className="text-gradient">web experiences</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We create web applications that combine stunning design with robust functionality. Our team specializes
                in modern frameworks, performance optimization, and scalable architectures that grow with your business.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you need a simple landing page, a complex e-commerce platform, or a custom web application, we
                deliver solutions that exceed expectations. Every project is built with clean code, best practices, and
                future scalability in mind.
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
                { value: "50%", label: "Faster Load Times" },
                { value: "100+", label: "Projects Delivered" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "24/7", label: "Support" },
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
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
              <span className="text-foreground/90">Comprehensive</span> <span className="text-gradient">Development Services</span>
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

      {/* Technologies */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-mono text-primary tracking-wider uppercase">Technologies</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              <span className="text-gradient">Modern tech stack</span> <span className="text-foreground/90">we use</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 rounded-full glass hover:glass-strong hover:glow-primary cursor-default transition-all duration-300 text-sm font-medium"
              >
                {tech}
              </motion.span>
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
              className="p-10 rounded-3xl glass-strong"
            >
              <div className="text-6xl font-bold text-gradient mb-4">50%</div>
              <p className="text-xl text-foreground/90 mb-6">Faster Load Times</p>
              <p className="text-muted-foreground leading-relaxed">
                Our optimized applications load 50% faster than industry average, improving user experience and SEO
                rankings. Performance is at the core of everything we build.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-sm font-mono text-primary tracking-wider uppercase">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                <span className="text-gradient">Quality that</span> <span className="text-foreground/90">delivers</span>
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
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
              <span className="text-foreground/90">How we</span> <span className="text-gradient">build</span>
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
              <span className="text-foreground/90">Ready to build your</span> <span className="text-gradient">next web project?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and create a web application that drives results and exceeds expectations.
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

