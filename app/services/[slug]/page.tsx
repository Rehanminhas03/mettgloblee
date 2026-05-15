"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"
import {
  ArrowUpRight,
  ShoppingCart,
  Code,
  Shield,
  Users,
  Palette,
  Brain,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

const servicesData: Record<string, {
  title: string
  subtitle: string
  description: string
  icon: any
  heroImage: string
  features: { title: string; description: string }[]
  benefits: string[]
  process: { step: string; title: string; description: string }[]
  pricing?: { name: string; price: string; features: string[] }[]
  faqs: { question: string; answer: string }[]
  relatedServices: string[]
}> = {
  ecommerce: {
    title: "Amazon & eCommerce",
    subtitle: "Multi-Channel Marketplace Excellence",
    description:
      "Dominate the digital marketplace with our comprehensive eCommerce management services. From Amazon to Walmart, Shopify to eBay, we optimize every channel for maximum revenue.",
    icon: ShoppingCart,
    heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1920&h=1080&q=80",
    features: [
      {
        title: "Marketplace Management",
        description: "Complete account management across Amazon, Walmart, eBay, and more.",
      },
      {
        title: "Product Listing Optimization",
        description: "SEO-optimized listings with compelling copy and A+ content.",
      },
      {
        title: "PPC Advertising",
        description: "Data-driven ad campaigns that maximize ROI and minimize ACoS.",
      },
      {
        title: "Inventory Management",
        description: "Smart inventory forecasting and replenishment strategies.",
      },
      {
        title: "Brand Registry & Protection",
        description: "Protect your brand from hijackers and counterfeiters.",
      },
      {
        title: "Analytics & Reporting",
        description: "Comprehensive dashboards with actionable insights.",
      },
    ],
    benefits: [
      "40%+ revenue lift typical within 6 months",
      "ACoS reductions of 30–50% on managed accounts",
      "Multi-marketplace expansion support",
      "24/7 account monitoring",
      "Dedicated account managers",
    ],
    process: [
      { step: "01", title: "Audit", description: "Complete analysis of your current marketplace presence." },
      { step: "02", title: "Strategy", description: "Custom growth plan tailored to your goals." },
      { step: "03", title: "Optimize", description: "Implementation of best practices across all channels." },
      { step: "04", title: "Scale", description: "Aggressive growth strategies and new market expansion." },
    ],
    faqs: [
      {
        question: "Which marketplaces do you support?",
        answer: "We support Amazon (US, UK, EU, CA, AU), Walmart, eBay, Shopify, Etsy, and emerging marketplaces.",
      },
      {
        question: "How long before I see results?",
        answer: "Most clients see significant improvements within 30-60 days of optimization.",
      },
      {
        question: "Do you offer white-label services?",
        answer: "Yes, we provide white-label eCommerce management for agencies.",
      },
    ],
    relatedServices: ["web-development", "branding", "ai-automation"],
  },
  "web-development": {
    title: "Web Development",
    subtitle: "Modern, Scalable Web Solutions",
    description:
      "Build powerful web applications with cutting-edge technologies. From landing pages to complex enterprise solutions, we deliver performant, scalable, and beautiful digital experiences.",
    icon: Code,
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&h=1080&q=80",
    features: [
      {
        title: "Custom Web Applications",
        description: "Bespoke solutions built with React, Next.js, and modern frameworks.",
      },
      {
        title: "E-commerce Platforms",
        description: "High-converting online stores with seamless checkout experiences.",
      },
      {
        title: "API Development",
        description: "Robust RESTful and GraphQL APIs for your applications.",
      },
      {
        title: "Performance Optimization",
        description: "Lightning-fast load times and Core Web Vitals optimization.",
      },
      {
        title: "CMS Integration",
        description: "Headless CMS solutions for easy content management.",
      },
      {
        title: "Maintenance & Support",
        description: "Ongoing support, updates, and performance monitoring.",
      },
    ],
    benefits: [
      "Average 70% improvement in load times",
      "Mobile-first responsive design",
      "SEO-optimized from the ground up",
      "Scalable architecture",
      "Comprehensive documentation",
    ],
    process: [
      { step: "01", title: "Discovery", description: "Understanding your requirements and goals." },
      { step: "02", title: "Design", description: "UI/UX design with interactive prototypes." },
      { step: "03", title: "Development", description: "Agile development with regular updates." },
      { step: "04", title: "Launch", description: "Thorough testing and smooth deployment." },
    ],
    faqs: [
      {
        question: "What technologies do you use?",
        answer: "We specialize in React, Next.js, Node.js, Python, and modern cloud infrastructure.",
      },
      {
        question: "How long does a typical project take?",
        answer: "Timeline varies by complexity - from 4 weeks for simple sites to 3-6 months for complex applications.",
      },
      {
        question: "Do you provide hosting?",
        answer: "We can deploy to any platform including Vercel, AWS, Google Cloud, or your own infrastructure.",
      },
    ],
    relatedServices: ["cybersecurity", "ai-automation", "ecommerce"],
  },
  cybersecurity: {
    title: "Cybersecurity Services",
    subtitle: "Enterprise-Grade Security Solutions",
    description:
      "Protect your digital assets with comprehensive security services. From penetration testing to incident response, we keep your business safe from evolving threats.",
    icon: Shield,
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&h=1080&q=80",
    features: [
      {
        title: "Penetration Testing",
        description: "Identify vulnerabilities before attackers do.",
      },
      {
        title: "Security Audits",
        description: "Comprehensive assessment of your security posture.",
      },
      {
        title: "Incident Response",
        description: "24/7 rapid response to security incidents.",
      },
      {
        title: "Compliance Management",
        description: "GDPR, SOC2, PCI-DSS, and HIPAA compliance.",
      },
      {
        title: "Security Training",
        description: "Employee awareness and phishing simulations.",
      },
      {
        title: "Managed Security",
        description: "Ongoing monitoring and threat detection.",
      },
    ],
    benefits: [
      "Zero breaches for managed clients",
      "100% compliance achievement rate",
      "Average 147 vulnerabilities identified per audit",
      "24/7 security operations center",
      "Certified security professionals",
    ],
    process: [
      { step: "01", title: "Assessment", description: "Evaluate current security infrastructure." },
      { step: "02", title: "Testing", description: "Comprehensive penetration testing." },
      { step: "03", title: "Remediation", description: "Fix vulnerabilities and strengthen defenses." },
      { step: "04", title: "Monitor", description: "Continuous monitoring and improvement." },
    ],
    faqs: [
      {
        question: "What certifications do your team hold?",
        answer: "Our team holds CEH, OSCP, CISSP, and various vendor-specific certifications.",
      },
      {
        question: "How often should we conduct penetration testing?",
        answer: "We recommend quarterly testing or after any significant infrastructure changes.",
      },
      {
        question: "Do you offer managed security services?",
        answer: "Yes, we provide 24/7 managed security operations for continuous protection.",
      },
    ],
    relatedServices: ["web-development", "ai-automation"],
  },
  "lead-generation": {
    title: "B2B Lead Generation",
    subtitle: "Data-Driven Sales Pipeline",
    description:
      "Build a robust sales pipeline with our data-driven lead generation services. From research to appointment setting, we deliver qualified leads ready to convert.",
    icon: Users,
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&h=1080&q=80",
    features: [
      {
        title: "Lead Research",
        description: "Identify and qualify high-value prospects.",
      },
      {
        title: "Email Outreach",
        description: "Personalized cold email campaigns.",
      },
      {
        title: "LinkedIn Prospecting",
        description: "Strategic social selling on LinkedIn.",
      },
      {
        title: "CRM Management",
        description: "Full CRM setup and optimization.",
      },
      {
        title: "Appointment Setting",
        description: "Book qualified meetings for your sales team.",
      },
      {
        title: "Analytics & Reporting",
        description: "Track every metric of your pipeline.",
      },
    ],
    benefits: [
      "Hundreds of qualified leads sourced per month per active account",
      "Meeting booking rates typically in the 25–40% range",
      "Full CRM integration",
      "Dedicated SDR teams",
      "Multi-channel outreach",
    ],
    process: [
      { step: "01", title: "ICP Definition", description: "Define your ideal customer profile." },
      { step: "02", title: "List Building", description: "Build targeted prospect lists." },
      { step: "03", title: "Outreach", description: "Execute multi-channel campaigns." },
      { step: "04", title: "Nurture", description: "Qualify and hand off warm leads." },
    ],
    faqs: [
      {
        question: "What industries do you specialize in?",
        answer: "We serve B2B companies across technology, SaaS, manufacturing, and professional services.",
      },
      {
        question: "How do you ensure lead quality?",
        answer: "Multi-step qualification process including BANT criteria verification.",
      },
      {
        question: "What CRMs do you work with?",
        answer: "Salesforce, HubSpot, Pipedrive, and most major CRM platforms.",
      },
    ],
    relatedServices: ["branding", "ai-automation", "ecommerce"],
  },
  branding: {
    title: "Branding & Marketing",
    subtitle: "Creative Design & Digital Marketing",
    description:
      "Build a powerful brand identity and reach your audience with data-driven marketing. From logo design to full-scale campaigns, we create lasting impressions.",
    icon: Palette,
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&h=1080&q=80",
    features: [
      {
        title: "Brand Identity",
        description: "Logo, color palette, and brand guidelines.",
      },
      {
        title: "Social Media Marketing",
        description: "Strategic content and community management.",
      },
      {
        title: "Content Marketing",
        description: "Engaging content that drives conversions.",
      },
      {
        title: "Paid Advertising",
        description: "ROI-focused ad campaigns across platforms.",
      },
      {
        title: "Email Marketing",
        description: "Automated campaigns that nurture leads.",
      },
      {
        title: "Video Production",
        description: "Professional video content for all platforms.",
      },
    ],
    benefits: [
      "Strong organic and paid reach across launch campaigns",
      "8.5% average engagement rate",
      "Full creative team in-house",
      "AI-powered campaign optimization",
      "Multi-platform expertise",
    ],
    process: [
      { step: "01", title: "Discovery", description: "Understand your brand and audience." },
      { step: "02", title: "Strategy", description: "Develop comprehensive marketing plan." },
      { step: "03", title: "Create", description: "Produce compelling creative assets." },
      { step: "04", title: "Execute", description: "Launch and optimize campaigns." },
    ],
    faqs: [
      {
        question: "What platforms do you advertise on?",
        answer: "Google, Facebook, Instagram, LinkedIn, TikTok, and Amazon advertising.",
      },
      {
        question: "Do you offer monthly retainers?",
        answer: "Yes, we offer flexible retainer packages for ongoing marketing support.",
      },
      {
        question: "Can you work with our existing brand guidelines?",
        answer: "Absolutely, we adapt to existing guidelines while suggesting improvements.",
      },
    ],
    relatedServices: ["web-development", "ecommerce", "ai-automation"],
  },
  "ai-automation": {
    title: "AI & Automation",
    subtitle: "Intelligent Workflow Solutions",
    description:
      "Transform your operations with AI-powered automation. From chatbots to predictive analytics, we help you work smarter, not harder.",
    icon: Brain,
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&h=1080&q=80",
    features: [
      {
        title: "AI Chatbots",
        description: "24/7 customer support with intelligent bots.",
      },
      {
        title: "Workflow Automation",
        description: "Automate repetitive tasks and processes.",
      },
      {
        title: "Predictive Analytics",
        description: "Data-driven insights and forecasting.",
      },
      {
        title: "Document Processing",
        description: "AI-powered document extraction and analysis.",
      },
      {
        title: "Custom AI Solutions",
        description: "Bespoke AI models for your specific needs.",
      },
      {
        title: "Integration Services",
        description: "Connect AI tools with your existing systems.",
      },
    ],
    benefits: [
      "30–60% reduction in manual workload on automated workflows",
      "Higher first-response satisfaction on AI-handled queries",
      "Meaningful operational cost savings within months of deployment",
      "24/7 automated operations",
      "Scalable AI infrastructure",
    ],
    process: [
      { step: "01", title: "Assess", description: "Identify automation opportunities." },
      { step: "02", title: "Design", description: "Architect AI solutions." },
      { step: "03", title: "Implement", description: "Deploy and train AI systems." },
      { step: "04", title: "Optimize", description: "Continuous improvement and learning." },
    ],
    faqs: [
      {
        question: "What AI technologies do you use?",
        answer: "OpenAI, Google AI, custom ML models, and leading automation platforms.",
      },
      {
        question: "How long does implementation take?",
        answer: "Simple automations in 2-4 weeks, complex AI solutions in 2-3 months.",
      },
      {
        question: "Will AI replace my employees?",
        answer: "AI augments your team, handling routine tasks so employees can focus on high-value work.",
      },
    ],
    relatedServices: ["web-development", "lead-generation", "branding"],
  },
}

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const service = servicesData[slug]

  if (!service) {
    return (
      <main className="relative min-h-screen overflow-hidden noise-overlay">
        <AnimatedBackground />
        <Navigation />
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Link href="/services" className="text-primary hover:underline">
            View All Services
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const Icon = service.icon

  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl glass-subtle">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm font-mono text-primary tracking-wider uppercase">{service.subtitle}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
              <span className="text-gradient">{service.title}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl bg-primary text-primary-foreground hover:glow-primary transition-all duration-500"
              >
                Get Started
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl glass hover:glass-strong transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-foreground/90">What's</span>{" "}
              <span className="text-gradient">Included</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl glass hover:glass-strong transition-all duration-300 hover:glow-primary"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                <span className="text-foreground/90">Why choose</span>{" "}
                <span className="text-gradient">our service?</span>
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass-strong"
            >
              <h3 className="text-2xl font-bold mb-6 text-gradient">Our Process</h3>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{step.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-foreground/90">Frequently Asked</span>{" "}
              <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl glass"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-16 rounded-3xl glass-strong"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-foreground/90">Ready to</span>{" "}
              <span className="text-gradient">get started?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our {service.title.toLowerCase()} services can transform your business.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl bg-primary text-primary-foreground hover:glow-primary transition-all duration-500"
            >
              Get Free Consultation
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
