"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, MapPin, Clock, Briefcase, Users, Heart, Zap, Globe } from "lucide-react"
import { Card3D } from "@/components/card-3d"

const benefits = [
  {
    icon: Globe,
    title: "Remote-First",
    description: "Work from anywhere in the world with flexible hours",
  },
  {
    icon: Zap,
    title: "Growth Opportunities",
    description: "Continuous learning and career advancement paths",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Comprehensive health insurance for you and family",
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Collaborate with talented professionals globally",
  },
]

const openPositions = [
  {
    id: 1,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote / Pakistan",
    type: "Full-time",
    description:
      "We're looking for an experienced Full Stack Developer to build scalable web applications using Next.js, React, and Node.js.",
    requirements: [
      "3+ years of experience in web development",
      "Proficiency in React, Next.js, TypeScript",
      "Experience with Node.js and databases",
      "Strong problem-solving skills",
    ],
  },
  {
    id: 2,
    title: "Amazon Marketplace Specialist",
    department: "eCommerce",
    location: "Remote",
    type: "Full-time",
    description:
      "Join our eCommerce team to manage and optimize Amazon accounts and advertising campaigns for our clients.",
    requirements: [
      "2+ years of Amazon experience",
      "Strong analytical skills",
      "Experience with Seller Central",
      "Knowledge of Amazon PPC",
    ],
  },
  {
    id: 3,
    title: "AI Content Creator",
    department: "Creative",
    location: "Remote",
    type: "Full-time / Contract",
    description:
      "Create AI-powered video content, educational materials, and marketing assets using the latest AI tools.",
    requirements: [
      "Experience with AI video tools (HeyGen, Synthesia, D-ID)",
      "Video editing skills",
      "Creative mindset",
      "Strong attention to detail",
    ],
  },
]

const values = [
  {
    title: "Innovation First",
    description: "We embrace new technologies and creative solutions to solve complex problems.",
  },
  {
    title: "Client Success",
    description: "Our clients' success is our success. We go above and beyond to deliver results.",
  },
  {
    title: "Continuous Learning",
    description: "We invest in our team's growth through training, certifications, and mentorship.",
  },
  {
    title: "Work-Life Balance",
    description: "We believe in sustainable work practices and respect personal time.",
  },
]

export default function CareersPage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&h=1080&q=80"
            alt="Team collaboration"
            fill
            className="object-cover opacity-15"
            priority
            sizes="100vw"
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
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-mono text-primary tracking-wider uppercase">Careers</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
              <span className="text-foreground/90">Join our</span>
              <br />
              <span className="text-gradient">global team</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              Be part of a passionate team building innovative digital solutions for clients worldwide.
              We're always looking for talented individuals who share our vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground/90">Why work</span>{" "}
              <span className="text-gradient">with us?</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card3D intensity={6} hoverLift={5} className="p-6 rounded-2xl glass hover:glass-strong transition-all duration-300 text-center block">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl glass-subtle flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground/90">Our</span>{" "}
              <span className="text-gradient">values</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card3D intensity={5} hoverLift={4} className="p-6 rounded-2xl glass hover:glass-strong transition-all duration-300 block">
                  <h3 className="text-xl font-semibold text-gradient mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-mono text-primary tracking-wider uppercase">Open Positions</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-foreground/90">Current</span>{" "}
              <span className="text-gradient">openings</span>
            </h2>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card3D intensity={3} hoverLift={4}
                  className="group p-6 rounded-2xl glass hover:glass-strong transition-all duration-300 hover:glow-primary block"
                >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-sm text-primary">{position.department}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {position.type}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{position.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {position.requirements.slice(0, 3).map((req) => (
                    <span
                      key={req}
                      className="px-3 py-1 text-xs rounded-full glass-subtle"
                    >
                      {req}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/contact?position=${encodeURIComponent(position.title)}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Apply Now
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                </Card3D>
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
              <span className="text-foreground/90">Don't see</span>{" "}
              <span className="text-gradient">your role?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl bg-primary text-primary-foreground hover:glow-primary transition-all duration-500"
            >
              Send Your Resume
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
