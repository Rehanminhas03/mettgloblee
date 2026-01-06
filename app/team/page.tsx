"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const leadership = [
  {
    name: "Hammad Ayub",
    role: "Founder & Head of Project Management",
    bio: "As the Founder of Mett Global, Hammad's goal is to grow the company into an international software house providing complete digital solutions worldwide. Expert in Social Media Marketing, Branding, Canva Design, Product Photography, Video Editing & AI Video Production.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Muhammad Junaid",
    role: "Chief Executive Officer (CEO)",
    bio: "As the CEO of Mett Global, Muhammad Junaid leads the company's strategic vision and growth initiatives. With extensive experience in business development and technology, he drives the company towards becoming a leading international software house delivering innovative digital solutions worldwide.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Ali Hassan",
    role: "Co-Founder & Managing Director",
    bio: "Ali bridges the gap between creative design and technical e-commerce strategy. He specializes in scaling businesses globally on Amazon & eBay, graphic design, visual storytelling, AI video production, and strategic social media marketing.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Rehan Hussain Minhas",
    role: "Chairman & Head of Project Management",
    bio: "A results-driven IT professional combining technical full-stack expertise with strategic financial planning. BSCS holder pursuing Masters in Data Science, with experience in AI-animated video projects, full-stack platforms, budgeting and cost control.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
]

const team = [
  {
    name: "Muhammad Ahmad Aamir",
    role: "Chief Operating Officer (COO)",
    bio: "Muhammad specializes in scaling operational, logistical, and execution frameworks. With international experience across North America and Europe, he focuses on Global Logistics, Supply Chain Management, and Process Automation.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Muhammad Ayaan Sultan",
    role: "Head of Business Management & Operations",
    bio: "Ayaan oversees business performance and service delivery excellence. He focuses on building operational frameworks that support sustainable growth and client satisfaction with experience at Hyundai Islamabad.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Ramzan Ali Bhatti",
    role: "Operations & Project Manager",
    bio: "Ramzan bridges the gap between financial integrity and project acquisition. He manages cash flow and leads bidding strategies to secure high-value contracts with a background in Business Operations and Finance.",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Shahrukh Butt",
    role: "HR Manager",
    bio: "Shahrukh manages talent and internal operations while contributing to business development. He focuses on building efficient teams and driving revenue through strategic client acquisition.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Muhammad Rafey",
    role: "Full Stack Developer & Cybersecurity Specialist",
    bio: "Rafey combines full-stack web development with a strong background in cybersecurity. He builds scalable, secure systems with expertise in React, Django, penetration testing, and AI-driven automation.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Umair Ahmed",
    role: "Full Stack Developer",
    bio: "Umair focuses on designing and maintaining scalable web applications. He ensures that digital solutions are reliable, secure, and performance-driven with expertise in end-to-end application development.",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Abdul Wasay",
    role: "Python Programmer",
    bio: "Abdul is a programmer with a background in content moderation and compliance, now focused on AI and automation. Expert in Python programming, web development, and AI chatbot solutions.",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=500&fit=crop&crop=face",
  },
]

const values = [
  { title: "Innovation", description: "Pushing boundaries with cutting-edge solutions" },
  { title: "Excellence", description: "Delivering world-class quality in everything we do" },
  { title: "Partnership", description: "Building lasting relationships with our clients" },
  { title: "Integrity", description: "Operating with transparency and honesty" },
]

export default function TeamPage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1080&fit=crop"
            alt="Team meeting"
            fill
            className="object-cover opacity-15"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-primary"
              />
              <span className="text-xs tracking-widest uppercase text-primary/80">Our Team</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6">
              <span className="text-gradient-subtle">Meet The Team</span>
              <br />
              <span className="text-gradient">Behind Mett Global</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              A passionate team of innovators, strategists, and technical experts dedicated to delivering exceptional
              digital solutions and scaling businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-primary"
              />
              <span className="text-xs tracking-widest uppercase text-primary/80">Leadership</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              <span className="text-gradient-subtle">Executive</span>{" "}
              <span className="text-gradient">Team</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="rounded-2xl overflow-hidden glass-card hover:glow-border transition-all duration-500">
                  <div className="grid md:grid-cols-5">
                    {/* Image */}
                    <div className="md:col-span-2 relative h-56 md:h-full min-h-[200px] overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80" />
                    </div>

                    {/* Content */}
                    <div className="md:col-span-3 p-6 flex flex-col justify-center">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary mb-4">{member.role}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{member.bio}</p>

                      <div className="flex items-center gap-2">
                        <a
                          href={member.linkedin}
                          className="p-2.5 rounded-lg glass-subtle hover:bg-primary/10 transition-colors duration-300"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                          href={member.twitter}
                          className="p-2.5 rounded-lg glass-subtle hover:bg-primary/10 transition-colors duration-300"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="p-2.5 rounded-lg glass-subtle hover:bg-primary/10 transition-colors duration-300"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-primary"
              />
              <span className="text-xs tracking-widest uppercase text-primary/80">The Crew</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              <span className="text-gradient-subtle">Our</span>{" "}
              <span className="text-gradient">Experts</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="rounded-xl overflow-hidden glass-card hover:glow-border transition-all duration-500 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  </div>
                  <div className="p-5 -mt-10 relative">
                    <h3 className="text-base font-semibold text-foreground mb-0.5">{member.name}</h3>
                    <p className="text-xs text-primary mb-3">{member.role}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-10 bg-primary" />
              <span className="text-xs tracking-widest uppercase text-primary/80">What Drives Us</span>
              <div className="h-px w-10 bg-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              <span className="text-gradient-subtle">Our</span>{" "}
              <span className="text-gradient">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl glass-card hover:glow-border transition-all duration-500 text-center"
              >
                <h3 className="text-base font-semibold text-gradient mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-12 md:p-16 rounded-2xl glass-strong"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              <span className="text-gradient-subtle">Want to join</span>{" "}
              <span className="text-gradient">our team?</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8">
              We are always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-200"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
