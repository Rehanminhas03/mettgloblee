"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const faqCategories = [
  {
    category: "General",
    questions: [
      {
        question: "What services does Mett Global offer?",
        answer:
          "Mett Global offers 11 comprehensive service lines including Amazon & eCommerce management, Web Development, Cybersecurity Services, Procurement & Manufacturing, Supply Chain & Logistics, B2B Lead Generation, Branding & Marketing, AI & Automation, Customer Support, IT Help Desk, and Data Entry & Virtual Assistants.",
      },
      {
        question: "Where is Mett Global located?",
        answer:
          "Our headquarters is in Pakistan, but we serve clients globally across the USA, UK, Europe, Australia, and Middle East. We operate as a remote-first company with team members worldwide.",
      },
      {
        question: "How long has Mett Global been in business?",
        answer:
          "Mett Global was founded in 2018 as Amazon specialists. Since then, we've grown into a full-service digital agency with 11 service lines and have successfully delivered over 500 projects for clients worldwide.",
      },
    ],
  },
  {
    category: "Services & Pricing",
    questions: [
      {
        question: "How do you price your services?",
        answer:
          "Our pricing varies based on the scope and complexity of each project. We offer flexible pricing models including project-based, retainer, and hourly rates. Contact us for a free consultation and custom quote tailored to your needs.",
      },
      {
        question: "Do you offer package deals for multiple services?",
        answer:
          "Yes! We offer bundled packages for clients who need multiple services. These packages often come with significant savings and ensure seamless integration across all your digital needs.",
      },
      {
        question: "What is your minimum engagement period?",
        answer:
          "Our minimum engagement varies by service. For most ongoing services like eCommerce management, we recommend a minimum 3-month engagement to see meaningful results. Project-based work has no minimum duration.",
      },
    ],
  },
  {
    category: "Process & Timeline",
    questions: [
      {
        question: "What is your typical project process?",
        answer:
          "Our process follows five key stages: 1) Discovery - understanding your business and goals, 2) Strategy - developing a tailored roadmap, 3) Execution - implementing solutions, 4) Optimization - continuous improvement, and 5) Support - ongoing partnership.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Project timelines vary based on scope. A simple website might take 4-6 weeks, while complex eCommerce integrations could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
      },
      {
        question: "How do you communicate project progress?",
        answer:
          "We provide regular updates through your preferred communication channel (Slack, email, or scheduled calls). You'll have a dedicated project manager and access to our project management system for real-time progress tracking.",
      },
    ],
  },
  {
    category: "Support & Maintenance",
    questions: [
      {
        question: "Do you offer ongoing support after project completion?",
        answer:
          "Absolutely! We offer various support and maintenance packages to ensure your solutions continue to perform optimally. This includes 24/7 support for critical issues, regular updates, and continuous optimization.",
      },
      {
        question: "What is your response time for support requests?",
        answer:
          "Our standard response time is within 4 business hours. For clients on premium support plans, we offer 24/7 support with response times as fast as 1 hour for critical issues.",
      },
      {
        question: "Can I upgrade or modify my services later?",
        answer:
          "Yes! We design our solutions to be scalable. You can easily upgrade, add new services, or modify existing ones as your business grows and your needs evolve.",
      },
    ],
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-border/50"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-lg font-medium text-foreground/90 group-hover:text-primary transition-colors pr-4">
          {question}
        </span>
        <div className="flex-shrink-0 p-2 rounded-full glass-subtle group-hover:bg-primary/10 transition-colors">
          {isOpen ? (
            <Minus className="w-5 h-5 text-primary" />
          ) : (
            <Plus className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted-foreground leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-mono text-primary tracking-wider uppercase">FAQ</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-8">
              <span className="text-foreground/90">Frequently Asked</span>
              <br />
              <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and how we can help your
              business grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gradient mb-6">{category.category}</h2>
                <div className="rounded-2xl glass p-6">
                  {category.questions.map((item, index) => (
                    <FAQItem
                      key={`${categoryIndex}-${index}`}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openItems[`${categoryIndex}-${index}`] || false}
                      onClick={() => toggleItem(`${categoryIndex}-${index}`)}
                    />
                  ))}
                </div>
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
            className="text-center p-16 rounded-3xl glass-strong max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-foreground/90">Still have</span>{" "}
              <span className="text-gradient">questions?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl bg-primary text-primary-foreground hover:glow-primary transition-all duration-500"
            >
              Contact Us
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
