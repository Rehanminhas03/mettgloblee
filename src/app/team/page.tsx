"use client"

import { useState } from "react"
import { Navigation, Footer } from "@/components/layout"
import { AnimatedBackground } from "@/components/common"
import { TeamHero, LeadershipSection, TeamGrid, ValuesSection, TeamMemberModal } from "@/components/pages/team"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { TeamMemberFull } from "@/components/pages/team/TeamMemberModal"

const leadership: TeamMemberFull[] = [
  {
    name: "Hammad Ayub",
    role: "Founder",
    bio: "As the Founder of METT Global, Hammad's goal is to grow the company into an international software house providing complete digital solutions worldwide.",
    fullBio: "As the Founder of METT Global, Hammad Ayub's vision is to transform the company into a leading international software house providing complete digital solutions worldwide. With extensive experience in social media marketing, branding, and digital content creation, he brings a unique blend of creative and business expertise to drive the company's growth across global markets.",
    expertise: ["Social Media Marketing", "Branding", "Canva Design", "Product Photography", "Video Editing", "AI Video Production"],
    experience: "Co-Founder & CEO at Rabi Traders (Amazon FBA). Social Media Manager for Ittehad Steel, Hyundai, Jetour, and Geely Islamabad.",
    achievements: [
      "Founded METT Global with vision of becoming international software house",
      "Successfully managed social media for major automotive brands",
      "Built Amazon FBA business from ground up",
      "Pioneered AI video production workflows"
    ],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Muhammad Junaid",
    role: "Chief Executive Officer",
    bio: "A seasoned executive with deep expertise in lead generation, e-commerce, technology, and business operations. Known for transforming businesses through data-driven strategies.",
    fullBio: "A seasoned executive with deep expertise in lead generation, e-commerce, technology, and business operations. Muhammad Junaid has a proven track record of transforming businesses through data-driven strategies and innovative solutions. His leadership style combines analytical precision with creative problem-solving, enabling METT Global to consistently exceed client expectations and deliver measurable results.",
    expertise: ["Lead Generation", "E-commerce Strategy", "Data Analytics", "Business Operations", "Growth Marketing"],
    experience: "10+ years driving business growth through technology and strategic initiatives",
    achievements: [
      "Scaled revenue operations by 300% year-over-year",
      "Implemented data-driven decision frameworks across all departments",
      "Built high-performing teams that consistently exceed KPIs",
      "Developed proprietary lead generation methodologies"
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Ali Hassan",
    role: "Co-Founder & Managing Director",
    bio: "Ali bridges the gap between creative design and technical e-commerce strategy. He specializes in scaling businesses globally on major e-commerce platforms.",
    fullBio: "Ali Hassan bridges the gap between creative design and technical e-commerce strategy. He specializes in scaling businesses globally on major e-commerce platforms while overseeing the visual quality of projects. His unique combination of design sensibility and e-commerce expertise enables METT Global to deliver both visually stunning and commercially successful solutions.",
    expertise: ["Amazon & eBay Operations", "Listing Optimization", "Global Scaling", "Graphic Design", "Visual Storytelling", "AI Video Production", "Product Photography", "Strategic Marketing"],
    experience: "Expert in Amazon & eBay store operations, listing optimization, and global scaling. Proficient in visual storytelling, branding, and marketing collateral using Canva and professional tools.",
    achievements: [
      "Scaled multiple e-commerce stores to international markets",
      "Developed comprehensive branding strategies for global clients",
      "Pioneered AI-powered multimedia production workflows",
      "Built end-to-end visual identity systems for brands"
    ],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Rehan Hussain Minhas",
    role: "Chairman & Head of Project Management",
    bio: "A results-driven IT professional combining technical full-stack expertise with strategic financial planning. Ensures efficient project execution and financial sustainability.",
    fullBio: "A results-driven IT professional combining technical full-stack expertise with strategic financial planning. Rehan Hussain Minhas ensures efficient project execution and financial sustainability across all METT Global operations. His dual expertise in development and management enables seamless delivery of complex technical projects while maintaining fiscal responsibility.",
    expertise: ["Full-Stack Development", "Technical Leadership", "Project Management", "Budgeting & Cost Control", "AI-based Animated Videos", "Data Science", "Analytics"],
    experience: "BSCS holder, currently pursuing Masters in Data Science. Extensive experience in AI-animated video projects and full-stack web platforms.",
    achievements: [
      "Delivered 500+ projects with 98% client satisfaction rate",
      "Implemented agile methodologies across all project teams",
      "Led development of AI-animated video production systems",
      "Built and mentored high-performing technical teams"
    ],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
  },
]

const team: TeamMemberFull[] = [
  {
    name: "Muhammad Ahmad Aamir",
    role: "Operations & Logistics Specialist",
    bio: "Specializes in scaling operational, logistical, and execution frameworks with international experience across North America and Europe.",
    fullBio: "Muhammad Ahmad Aamir specializes in scaling operational, logistical, and execution frameworks. With international experience across North America and Europe, he focuses on turning complex operations into efficient systems. His expertise in global logistics and e-commerce ecosystem support makes him invaluable in streamlining client operations.",
    expertise: ["Global Logistics", "Supply Chain Management", "Warehouse Operations", "3PL Procurement", "Process Automation", "Cost Optimization", "Amazon FBA", "Walmart WFS", "Shopify"],
    experience: "Former Warehouse Manager & Logistics Claims Specialist at RDX Sports. International experience across North America and Europe.",
    achievements: [
      "Optimized warehouse operations reducing costs by 30%",
      "Managed logistics claims with 95% resolution rate",
      "Implemented process automation across multiple fulfillment centers",
      "Supported scaling of e-commerce operations globally"
    ],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&q=80",
  },
  {
    name: "Ramzan Ali Bhatti",
    role: "Finance & Bidding Strategist",
    bio: "Bridges the gap between financial integrity and project acquisition. Manages cash flow and leads bidding strategies to secure high-value contracts.",
    fullBio: "Ramzan Ali Bhatti bridges the gap between financial integrity and project acquisition. He manages cash flow and leads bidding strategies to secure high-value contracts. His expertise in financial oversight and strategic bidding ensures METT Global maintains strong fiscal health while continuously acquiring quality projects.",
    expertise: ["Cash Flow Management", "Compliance Documentation", "Market Analysis", "Upwork Bidding", "Client Coordination", "Financial Oversight"],
    experience: "Background in Business Operations and Finance (BBA). Previous experience with Emaago (AI training), Eastern Highway Company, and OGDCL.",
    achievements: [
      "Secured high-value contracts through strategic bidding",
      "Maintained 100% compliance documentation standards",
      "Improved cash flow management processes",
      "Built strong client-provider communication bridges"
    ],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&q=80",
  },
  {
    name: "Shahrukh Butt",
    role: "HR Manager",
    bio: "Dedicated HR professional focused on building high-performing teams and fostering a positive workplace culture.",
    fullBio: "Shahrukh Butt is a dedicated HR professional focused on building high-performing teams and fostering a positive workplace culture at METT Global. With expertise in talent acquisition, employee development, and organizational culture, he ensures the company attracts and retains top talent while maintaining an environment that promotes growth and innovation.",
    expertise: ["Talent Acquisition", "Employee Development", "HR Strategy", "Performance Management", "Culture Building"],
    experience: "5+ years in human resources management across technology and services sectors.",
    achievements: [
      "Built recruitment pipeline reducing time-to-hire by 40%",
      "Implemented employee development programs with 95% satisfaction",
      "Maintained employee retention rate above 90%",
      "Established positive workplace culture initiatives"
    ],
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&q=80",
  },
  {
    name: "Muhammad Rafey",
    role: "Full Stack Developer & Cybersecurity",
    bio: "Expert in web development and cybersecurity solutions with a security-first approach to application development.",
    fullBio: "Muhammad Rafey is a Full Stack Web Developer and Cybersecurity Specialist who combines technical expertise with security-first thinking. He develops robust, secure web applications while implementing comprehensive security measures to protect client assets. His dual expertise ensures that every solution delivered is both functional and secure.",
    expertise: ["Full Stack Development", "Cybersecurity", "React/Next.js", "Node.js", "Security Auditing", "Penetration Testing"],
    experience: "4+ years in web development and cybersecurity across multiple industries.",
    achievements: [
      "Developed 50+ secure web applications",
      "Identified and resolved 100+ security vulnerabilities",
      "Implemented security protocols achieving zero breaches",
      "Built comprehensive security assessment frameworks"
    ],
    image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=300&h=300&fit=crop&q=80",
  },
  {
    name: "Umair Ahmed",
    role: "Full Stack Developer",
    bio: "Focuses on designing and maintaining scalable web applications that are reliable, secure, and performance-driven.",
    fullBio: "Umair Ahmed focuses on designing and maintaining scalable web applications. He ensures that digital solutions are reliable, secure, and performance-driven. His expertise spans the entire application development lifecycle, from front-end interfaces to back-end systems, database optimization, and application security.",
    expertise: ["End-to-End Application Development", "Front-end Development", "Back-end Development", "System Integration", "Database Optimization", "Application Security"],
    experience: "4+ years in full stack web development with focus on scalable, secure applications.",
    achievements: [
      "Built e-commerce platforms processing $10M+ annually",
      "Developed custom CMS solutions for enterprise clients",
      "Optimized database performance by 60%",
      "Implemented robust security measures across applications"
    ],
    image: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=300&h=300&fit=crop&q=80",
  },
  {
    name: "Muhammad Ayaan Sultan",
    role: "Head of Business Management & Operations",
    bio: "Oversees business performance and service delivery excellence. Focuses on building operational frameworks that support sustainable growth.",
    fullBio: "Muhammad Ayaan Sultan oversees business performance and service delivery excellence. He focuses on building operational frameworks that support sustainable growth and client satisfaction. His experience in sales leadership and strategic execution drives METT Global's business development initiatives.",
    expertise: ["Internal Operations Leadership", "Process Optimization", "Policy Structuring", "Sales Leadership", "Strategic Execution"],
    experience: "Assistant Manager Sales at Hyundai Islamabad. Freelance Meta Sales with £100k+ revenue generation.",
    achievements: [
      "Generated £100k+ revenue through freelance Meta sales",
      "Optimized internal operations improving efficiency by 35%",
      "Developed comprehensive policy structures",
      "Led sales initiatives at Hyundai Islamabad"
    ],
    image: "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?w=300&h=300&fit=crop&q=80",
  },
  {
    name: "Abdul Wasay",
    role: "Python Programmer",
    bio: "A programmer with background in content moderation and compliance, now focused on AI and automation solutions.",
    fullBio: "Abdul Wasay is a Python Programmer with a background in content moderation and compliance, now focused on AI and automation. His expertise spans Python programming, web development, and AI-powered solutions including chatbots and automation systems that help clients streamline their operations.",
    expertise: ["Python Programming", "Web Development", "AI Chatbots", "AI Automation Solutions"],
    experience: "Former Content Moderator at TELUS International. Transitioned to programming with focus on AI and automation.",
    achievements: [
      "Developed AI-powered automation solutions",
      "Built custom chatbot implementations for clients",
      "Created web applications using Python frameworks",
      "Leveraged content moderation experience for AI training projects"
    ],
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=300&h=300&fit=crop&q=80",
  },
]

const values = [
  { title: "Innovation", description: "Pushing boundaries with cutting-edge solutions" },
  { title: "Excellence", description: "Delivering world-class quality in everything we do" },
  { title: "Partnership", description: "Building lasting relationships with our clients" },
  { title: "Integrity", description: "Operating with transparency and honesty" },
]

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMemberFull | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleMemberClick = (member: TeamMemberFull) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedMember(null), 300)
  }

  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />

      <TeamHero />
      <LeadershipSection members={leadership} onMemberClick={handleMemberClick} />
      <TeamGrid members={team} onMemberClick={handleMemberClick} />
      <ValuesSection values={values} />

      {/* Join Us CTA */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-6 sm:p-10 md:p-12 rounded-xl sm:rounded-2xl glass-strong"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight mb-3">
              <span className="text-gradient-subtle">Want to join</span>{" "}
              <span className="text-gradient">our team?</span>
            </h2>
            <p className="text-[11px] sm:text-xs text-muted-foreground max-w-lg mx-auto mb-5">
              We are always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-[9px] sm:text-[10px] tracking-[0.15em] uppercase rounded-lg bg-primary text-primary-foreground hover:glow-primary transition-all duration-500"
            >
              View Open Positions
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Team Member Modal */}
      <TeamMemberModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  )
}
