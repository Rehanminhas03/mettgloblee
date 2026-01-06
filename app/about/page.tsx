"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"
import { Globe, Lightbulb, Target, Users, ArrowUpRight, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
    role: "Founder & Head of Project Management",
    bio: "Building Mett Global into an international software house with digital solutions worldwide.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Muhammad Junaid",
    role: "Chief Executive Officer",
    bio: "Leading the company's strategic vision and growth initiatives.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Ali Hassan",
    role: "Co-Founder & Managing Director",
    bio: "E-commerce strategy expert specializing in global marketplace scaling.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Rehan Hussain Minhas",
    role: "Chairman & Head of Project Management",
    bio: "Full-stack expertise combined with strategic financial planning.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
  },
]

const milestones = [
  { year: "2018", event: "Founded as Amazon specialists" },
  { year: "2019", event: "Expanded to full-service digital agency" },
  { year: "2020", event: "Launched cybersecurity division" },
  { year: "2021", event: "Reached 100+ global clients" },
  { year: "2022", event: "Introduced AI & automation services" },
  { year: "2023", event: "Expanded to 11 service lines" },
  { year: "2024", event: "500+ projects delivered worldwide" },
]

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-36 md:pt-44 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
            alt="Team collaboration"
            fill
            className="object-cover opacity-15"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
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
            <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-px bg-primary sm:w-[60px]"
              />
              <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-primary/80">About Us</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight leading-[0.9] mb-6 sm:mb-8 md:mb-10">
              <span className="block text-gradient-subtle">Building Global</span>
              <span className="block text-gradient">Success From Pakistan</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We are a premium multi-service agency delivering world-class digital solutions. From our headquarters in
              Pakistan, we serve clients across the globe with innovation, excellence, and partnership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
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
              className="group p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl glass-card hover:glass-strong hover:glow-border transition-all duration-700"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-4 mb-6"
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-px bg-primary"
                />
                <h3 className="text-xs tracking-[0.3em] uppercase text-primary">Our Vision</h3>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl text-foreground/90 leading-relaxed group-hover:text-foreground transition-colors"
              >
                To be the global bridge connecting Pakistani excellence with international markets, setting new
                standards in digital services.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, type: "spring" }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl glass-card hover:glass-strong hover:glow-border transition-all duration-700"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex items-center gap-4 mb-6"
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.45 }}
                  className="h-px bg-primary"
                />
                <h3 className="text-xs tracking-[0.3em] uppercase text-primary">Our Mission</h3>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-lg sm:text-xl md:text-2xl text-foreground/90 leading-relaxed group-hover:text-foreground transition-colors"
              >
                To empower businesses worldwide with comprehensive digital solutions that drive growth, security, and
                operational excellence.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] md:w-[800px] h-[500px] sm:h-[600px] md:h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-px bg-primary"
              />
              <span className="text-xs tracking-[0.3em] uppercase text-primary/80">Our Journey</span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-px bg-primary"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
              <span className="text-gradient-subtle">Years of</span> <span className="text-gradient">Excellence</span>
            </h2>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Animated Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary md:-translate-x-1/2 origin-top"
            />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 md:-translate-x-1/2 origin-top blur-sm"
            />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
                className={`relative flex items-center gap-4 sm:gap-6 md:gap-12 mb-12 sm:mb-16 md:mb-20 group ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.05, x: index % 2 === 0 ? 10 : -10 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-10 sm:pl-12 md:pl-0`}
                >
                  <div className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl glass hover:glass-strong transition-all duration-500 hover:glow-border group-hover:shadow-lg">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-3 sm:mb-4 tracking-tight"
                    >
                      {milestone.year}
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                      className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed"
                    >
                      {milestone.event}
                    </motion.p>
                    {/* Decorative line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.4 }}
                      className={`h-px bg-gradient-to-r mt-4 ${
                        index % 2 === 0 ? "from-transparent via-primary/50 to-primary" : "from-primary via-primary/50 to-transparent"
                      }`}
                    />
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.5, type: "spring", stiffness: 200 }}
                  className="absolute left-0 md:left-1/2 w-5 h-5 sm:w-6 sm:h-6 md:-translate-x-1/2 flex items-center justify-center z-10"
                >
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="absolute w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary glow-primary"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="absolute w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/30"
                  />
                  <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-background" />
                </motion.div>

                {/* Connecting Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                  className={`hidden md:block absolute top-1/2 h-px bg-gradient-to-r ${
                    index % 2 === 0
                      ? "left-1/2 right-0 from-primary/50 via-primary/30 to-transparent"
                      : "left-0 right-1/2 from-transparent via-primary/30 to-primary/50"
                  } -translate-y-1/2`}
                />

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary/80">Our Values</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
              <span className="text-gradient-subtle">What Drives</span>{" "}
              <span className="text-gradient">Us Forward</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl glass-card hover:glass-strong hover:glow-border transition-all duration-700"
              >
                <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl glass-subtle group-hover:bg-primary/10 group-hover:glow-primary transition-all duration-500 flex-shrink-0"
                  >
                    <value.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="text-lg sm:text-xl tracking-wider uppercase text-foreground mb-2 sm:mb-3 md:mb-4 group-hover:text-primary transition-colors"
                    >
                      {value.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors"
                    >
                      {value.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-mono text-primary tracking-wider uppercase">Leadership</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight">
              <span className="text-foreground/90">Meet the</span> <span className="text-gradient">team</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden glass hover:glass-strong transition-all duration-500 hover:glow-primary">
                  <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                    <motion.img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.7 }}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent transition-opacity duration-500"
                    />
                    {/* Overlay glow on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-primary/10"
                    />
                  </div>
                  <motion.div
                    initial={{ y: 0 }}
                    whileHover={{ y: -5 }}
                    className="p-4 sm:p-5 md:p-6 relative -mt-16 sm:-mt-18 md:-mt-20"
                  >
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="text-lg sm:text-xl font-bold text-foreground/90 mb-1 group-hover:text-primary transition-colors"
                    >
                      {member.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      className="text-xs sm:text-sm text-primary font-medium mb-2 sm:mb-3"
                    >
                      {member.role}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                    >
                      {member.bio}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                      className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4"
                    >
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1.5 sm:p-2 rounded-lg glass-subtle hover:bg-primary/20 hover:glow-primary transition-all duration-300"
                      >
                        <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1.5 sm:p-2 rounded-lg glass-subtle hover:bg-primary/20 hover:glow-primary transition-all duration-300"
                      >
                        <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center p-8 sm:p-12 md:p-16 lg:p-24 rounded-2xl sm:rounded-3xl glass-strong"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-6 sm:mb-8 md:mb-10">
              <span className="text-gradient-subtle">Ready to build your</span>{" "}
              <span className="text-gradient">success story?</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-[10px] sm:text-xs tracking-[0.2em] uppercase rounded-xl sm:rounded-2xl bg-primary text-primary-foreground hover:glow-primary transition-all duration-700 w-full sm:w-auto justify-center"
              >
                Get Started Today
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </Link>
              <Link
                href="/team"
                className="group inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-[10px] sm:text-xs tracking-[0.2em] uppercase rounded-xl sm:rounded-2xl glass-card hover:glow-border transition-all duration-700 w-full sm:w-auto justify-center"
              >
                Meet Our Team
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
