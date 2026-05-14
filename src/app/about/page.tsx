"use client"

import { Navigation, Footer } from "@/components/layout"
import { AnimatedBackground } from "@/components/common"
import { motion } from "framer-motion"
import { Globe, Lightbulb, Target, Users, ArrowUpRight, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by the tangible outcomes we deliver for our clients.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Constantly pushing boundaries with cutting-edge technology and creative solutions.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work as an extension of your team, invested in your long-term success.",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description: "International standards with local expertise and competitive advantages.",
  },
]

const team = [
  {
    name: "Hammad Ayub",
    role: "Founder",
    bio: "15+ years in business development, e-commerce, and digital operations.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Muhammad Junaid",
    role: "Chief Executive Officer",
    bio: "Expert in lead generation, e-commerce, and data-driven strategies.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Ali Hassan",
    role: "Co-Founder & Managing Director",
    bio: "Specialist in international trade and supply chain optimization.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Rehan Hussain Minhas",
    role: "Chairman & Head of PM",
    bio: "Global project management and strategic planning expert.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
  },
]

const milestones = [
  {
    year: "2018",
    title: "Foundation",
    event: "Started as a small Amazon FBA consulting team in Karachi, Pakistan with just 3 passionate experts helping local sellers reach global markets."
  },
  {
    year: "2019",
    title: "First Expansion",
    event: "Grew to 15 team members and expanded services to include Shopify development and multi-channel eCommerce management for UK and US clients."
  },
  {
    year: "2020",
    title: "Digital Pivot",
    event: "Launched web development and cybersecurity divisions during global digital transformation. Served 50+ clients remotely with zero downtime."
  },
  {
    year: "2021",
    title: "Global Reach",
    event: "Crossed 100 international clients milestone. Opened partnerships in Dubai, UK, and Australia. Team grew to 40+ professionals."
  },
  {
    year: "2022",
    title: "AI Integration",
    event: "Introduced AI-powered automation services and supply chain solutions. Launched procurement division serving manufacturing sector."
  },
  {
    year: "2023",
    title: "Full Service",
    event: "Expanded to 11 comprehensive service lines. Achieved ISO 27001 certification. 250+ active clients across 15 countries."
  },
  {
    year: "2024",
    title: "Industry Leader",
    event: "500+ projects delivered. 80+ team members. Recognized as top eCommerce agency in South Asia. Serving Fortune 500 companies."
  },
  {
    year: "2025",
    title: "Future Vision",
    event: "Launching METT Academy for digital skills training. Expanding AI capabilities and targeting 1000+ projects by year end."
  },
]

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "80+", label: "Team Members" },
  { value: "15+", label: "Countries Served" },
  { value: "7+", label: "Years Experience" },
]

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-px bg-primary sm:w-12"
              />
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-primary/80">
                About Us
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[0.9] mb-4 sm:mb-6">
              <span className="block text-gradient-subtle">Building Global</span>
              <span className="block text-gradient">Success From Pakistan</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
              METT Global is a premium multi-service agency delivering world-class digital solutions. From our headquarters in
              Pakistan, we serve clients across USA, UK, Europe, Australia, and the Middle East with innovation, excellence, and partnership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 sm:py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 sm:p-6 rounded-xl glass-card"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group p-5 sm:p-6 md:p-8 rounded-2xl glass-card hover:glass-strong hover:glow-border transition-all duration-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-px bg-primary"
                />
                <h3 className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-primary">Our Vision</h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed group-hover:text-foreground transition-colors">
                To be the global bridge connecting Pakistani excellence with international markets, setting new
                standards in digital services and empowering businesses worldwide.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, type: "spring" }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group p-5 sm:p-6 md:p-8 rounded-2xl glass-card hover:glass-strong hover:glow-border transition-all duration-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.45 }}
                  className="h-px bg-primary"
                />
                <h3 className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-primary">Our Mission</h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed group-hover:text-foreground transition-colors">
                To empower businesses worldwide with comprehensive digital solutions spanning e-commerce, web development,
                cybersecurity, AI automation, and supply chain optimization that drive measurable growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-primary/80">Our Journey</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight">
              <span className="text-gradient-subtle">Years of</span> <span className="text-gradient">Excellence</span>
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-primary/50 to-primary md:-translate-x-1/2" />
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex items-center gap-4 sm:gap-6 md:gap-10 mb-8 sm:mb-10 md:mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-8 sm:pl-10 md:pl-0`}>
                  <div className="p-4 sm:p-5 md:p-6 rounded-xl glass hover:glass-strong transition-all duration-500">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-gradient mb-1 tracking-tight">
                      {milestone.year}
                    </div>
                    <h4 className="text-xs sm:text-sm font-medium text-primary/80 mb-2 uppercase tracking-wider">
                      {milestone.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs md:text-sm text-foreground/70 leading-relaxed">
                      {milestone.event}
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 sm:w-5 sm:h-5 md:-translate-x-1/2 flex items-center justify-center z-10">
                  <div className="absolute w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary glow-primary" />
                  <div className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-background" />
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-primary/80">Our Values</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight">
              <span className="text-gradient-subtle">What Drives</span>{" "}
              <span className="text-gradient">Us Forward</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-4 sm:p-5 md:p-6 rounded-xl glass-card hover:glass-strong hover:glow-border transition-all duration-700"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="p-2.5 sm:p-3 rounded-lg glass-subtle group-hover:bg-primary/10 group-hover:glow-primary transition-all duration-500 shrink-0"
                  >
                    <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base tracking-wider uppercase text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-primary/80">Leadership</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight">
              <span className="text-foreground/90">Meet the</span> <span className="text-gradient">team</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="rounded-xl overflow-hidden glass hover:glass-strong transition-all duration-500 hover:glow-primary">
                  <div className="relative h-44 sm:h-52 md:h-56 overflow-hidden">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.7 }}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/95 via-background/30 to-transparent" />
                  </div>
                  <div className="p-3 sm:p-4 relative -mt-12 sm:-mt-14">
                    <h3 className="text-sm sm:text-base font-bold text-foreground/90 mb-0.5 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-primary font-medium mb-1.5">{member.role}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors">
                      {member.bio}
                    </p>
                    <div className="flex items-center gap-2 mt-2 sm:mt-3">
                      <a href="#" className="p-1.5 rounded-lg glass-subtle hover:bg-primary/20 transition-all">
                        <Linkedin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </a>
                      <a href="#" className="p-1.5 rounded-lg glass-subtle hover:bg-primary/20 transition-all">
                        <Twitter className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center p-6 sm:p-10 md:p-12 lg:p-16 rounded-xl sm:rounded-2xl glass-strong"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight mb-4 sm:mb-6">
              <span className="text-gradient-subtle">Ready to build your</span>{" "}
              <span className="text-gradient">success story?</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-[9px] sm:text-[10px] tracking-[0.15em] uppercase rounded-lg bg-primary text-primary-foreground hover:glow-primary transition-all duration-700 w-full sm:w-auto justify-center"
              >
                Get Started Today
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
              </Link>
              <Link
                href="/team"
                className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-[9px] sm:text-[10px] tracking-[0.15em] uppercase rounded-lg glass-card hover:glow-border transition-all duration-700 w-full sm:w-auto justify-center"
              >
                Meet Our Team
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
