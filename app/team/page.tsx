"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card3D } from "@/components/card-3d"

const leadership = [
  {
    name: "Hammad Ayub",
    role: "Founder",
    bio: "As the Founder of Mett Global, Hammad's goal is to grow the company into an international software house providing complete digital solutions worldwide. Expert in Social Media Marketing, Branding, Canva Design, Product Photography, Video Editing & AI Video Production.",
    image: "/team/hammad.jpg.jpeg",
    linkedin: "https://www.linkedin.com/in/hammad-ayub-62244922b/",
    twitter: "",
    email: "hamadayub64@gmail.com",
  },
  {
    name: "Muhammad Junaid",
    role: "Chief Executive Officer (CEO)",
    bio: "As the CEO of Mett Global, Muhammad Junaid leads the company's strategic vision and growth initiatives. With extensive experience in business development and technology, he drives the company towards becoming a leading international software house delivering innovative digital solutions worldwide.",
    image: "/team/junaid.png",
    linkedin: "",
    twitter: "",
    email: "",
  },
  {
    name: "Rehan Hussain Minhas",
    role: "Co-Founder & Managing Director",
    bio: "As Co-Founder and Managing Director, Rehan combines technical full-stack expertise with strategic financial planning to direct day-to-day operations. BSCS holder pursuing a Masters in Data Science, with experience in AI-animated video projects, full-stack platforms, budgeting, and cost control.",
    image: "/team/rehan.jpg.jpeg",
    linkedin: "https://www.linkedin.com/in/rehan-hussain-minhas-3055a1238/",
    twitter: "",
    email: "minhasrehan96@gmail.com",
  },
  {
    name: "Muhammad Rafey",
    role: "Chairman & Head of Project Management",
    bio: "As Chairman and Head of Project Management, Rafey leads end-to-end delivery across our engineering and security work. A full-stack engineer and cybersecurity specialist, his hands-on expertise spans React, Django, penetration testing, and AI-driven automation — bringing a builder's perspective to project planning, scope, and quality.",
    image: "/team/rafey.jpg.jpeg",
    linkedin: "https://www.linkedin.com/in/muhammad-rafey-25601b280/",
    twitter: "",
    email: "muhammadrafey.pk@gmail.com",
  },
]

const team = [
  {
    name: "Ali Hassan",
    role: "E-commerce Strategy & Brand Lead",
    bio: "Ali bridges the gap between creative design and technical e-commerce strategy. He specializes in scaling businesses globally on Amazon & eBay, graphic design, visual storytelling, AI video production, and strategic social media marketing.",
  },
  {
    name: "Muhammad Ahmad Aamir",
    role: "Chief Operating Officer (COO)",
    bio: "Muhammad specializes in scaling operational, logistical, and execution frameworks. With international experience across North America and Europe, he focuses on Global Logistics, Supply Chain Management, and Process Automation.",
  },
  {
    name: "Muhammad Ayaan Sultan",
    role: "Head of Business Management & Operations",
    bio: "Ayaan oversees business performance and service delivery excellence. He focuses on building operational frameworks that support sustainable growth and client satisfaction with experience at Hyundai Islamabad.",
  },
  {
    name: "Ramzan Ali Bhatti",
    role: "Operations & Project Manager",
    bio: "Ramzan bridges the gap between financial integrity and project acquisition. He manages cash flow and leads bidding strategies to secure high-value contracts with a background in Business Operations and Finance.",
  },
  {
    name: "Shahrukh Butt",
    role: "HR Manager",
    bio: "Shahrukh manages talent and internal operations while contributing to business development. He focuses on building efficient teams and driving revenue through strategic client acquisition.",
  },
  {
    name: "Umair Ahmed",
    role: "Full Stack Developer",
    bio: "Umair focuses on designing and maintaining scalable web applications. He ensures that digital solutions are reliable, secure, and performance-driven with expertise in end-to-end application development.",
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
                <Card3D intensity={4} hoverLift={5} className="rounded-2xl overflow-hidden glass-card hover:glow-border transition-all duration-500 block">
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
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg glass-subtle hover:bg-primary/10 transition-colors duration-300"
                            aria-label={`${member.name} on LinkedIn`}
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {member.twitter && (
                          <a
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg glass-subtle hover:bg-primary/10 transition-colors duration-300"
                            aria-label={`${member.name} on Twitter`}
                          >
                            <Twitter className="w-4 h-4" />
                          </a>
                        )}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="p-2.5 rounded-lg glass-subtle hover:bg-primary/10 transition-colors duration-300"
                            aria-label={`Email ${member.name}`}
                            title={member.email}
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Card3D>
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
            {team.map((member, index) => {
              const initials = member.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <Card3D intensity={6} hoverLift={5} className="rounded-xl glass-card hover:glow-border transition-all duration-500 h-full block p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-foreground font-semibold text-sm flex-shrink-0">
                        {initials}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold text-foreground leading-tight">{member.name}</h3>
                        <p className="text-xs text-primary mt-0.5">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
                  </Card3D>
                </motion.div>
              )
            })}
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
              >
                <Card3D intensity={6} hoverLift={4} className="p-6 rounded-xl glass-card hover:glow-border transition-all duration-500 text-center block">
                  <h3 className="text-base font-semibold text-gradient mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card3D>
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
