"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowUpRight, ArrowLeft, TrendingUp, Quote, CheckCircle } from "lucide-react"

const caseStudiesData: Record<string, {
  title: string
  category: string
  client: string
  industry: string
  duration: string
  heroImage: string
  result: string
  overview: string
  challenge: string
  solution: string
  implementation: string[]
  results: { metric: string; value: string; description: string }[]
  testimonial: {
    quote: string
    author: string
    role: string
    company: string
    image: string
  }
  technologies: string[]
  relatedServices: string[]
}> = {
  "1": {
    title: "Yuaia Haircare — AI Video Campaign",
    category: "AI & Automation",
    client: "Yuaia Haircare (Netherlands)",
    industry: "Beauty & Personal Care",
    duration: "8 weeks",
    heroImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1920&h=1080&q=80",
    result: "Educational AI campaign delivered on schedule",
    overview:
      "Yuaia Haircare wanted to launch a measured, educational campaign for their Grow & Glow Formula+ that showed realistic 90-day hair transformation results. They asked us to produce AI-generated video content with a calm, science-led tone — not the over-the-top before/after style common in the category.",
    challenge:
      "The brand needed visual proof of gradual results without overpromising. Filming a 90-day transformation traditionally would have been expensive and slow, and stock footage didn't fit the brand's quiet, ingredient-focused storytelling.",
    solution:
      "We built an AI video pipeline that generated frame-consistent transformation sequences, then layered in voiceover, ingredient explainers, and on-screen typography that matched Yuaia's existing brand system.",
    implementation: [
      "Defined a calm, educational tone-of-voice aligned with the brand's existing channels",
      "Storyboarded a 90-day arc with day-by-day milestones, not dramatic before/after",
      "Generated character-consistent AI video sequences across the transformation",
      "Wrote and recorded voiceover focused on ingredient science",
      "Composited ingredient overlays, motion typography, and the brand's pack-shot lockups",
      "Delivered cuts in 9:16, 1:1, and 16:9 for paid social and the brand site",
    ],
    results: [
      { metric: "Production Time", value: "8 weeks", description: "Concept to delivery, including revisions" },
      { metric: "Asset Variants", value: "12", description: "Cut-downs and aspect ratios delivered" },
      { metric: "Production Cost", value: "~60% lower", description: "Vs comparable live-action shoot" },
      { metric: "Brand Fit", value: "On-tone", description: "Approved without rework on first review" },
    ],
    testimonial: {
      quote:
        "We needed a campaign that respected our customers' intelligence — no miracle promises. The Mett Global team understood that immediately and delivered something we were proud to put our brand on.",
      author: "Anouk de Vries",
      role: "Brand Manager",
      company: "Yuaia Haircare",
      image: "",
    },
    technologies: ["Runway ML", "ElevenLabs", "After Effects", "Premiere Pro"],
    relatedServices: ["ai-automation", "branding"],
  },
  "2": {
    title: "HammerPath — AI Video Generator Platform",
    category: "Web Development",
    client: "HammerPath",
    industry: "AI / SaaS",
    duration: "5 months",
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1920&h=1080&q=80",
    result: "Full-stack SaaS launched with automated render pipeline",
    overview:
      "HammerPath needed a web platform that lets non-technical users generate AI videos through a guided workflow — from prompt to rendered output — without touching the underlying model APIs themselves.",
    challenge:
      "The product had to abstract away multiple AI providers, queue and monitor long-running render jobs, and surface them in a clean dashboard. Cost control on AI API spend was critical from day one.",
    solution:
      "We built a full-stack Next.js application with a Python rendering backend, a job queue for long-running generations, and per-user usage metering with hard cost caps.",
    implementation: [
      "Architected a Next.js + Python backend with a Redis-backed job queue",
      "Built a guided prompt-to-render workflow with template presets",
      "Integrated multiple AI video providers behind a single internal API",
      "Implemented per-user usage tracking and configurable cost caps",
      "Built the customer dashboard for managing renders, downloads, and history",
      "Set up authentication, billing, and admin tooling",
    ],
    results: [
      { metric: "Time to Launch", value: "5 months", description: "From kickoff to public beta" },
      { metric: "Avg Render", value: "< 4 min", description: "End-to-end queued render time" },
      { metric: "Cost Control", value: "Hard caps", description: "Per-account spend limits enforced" },
      { metric: "Stack", value: "Next.js + Python", description: "TypeScript frontend, FastAPI backend" },
    ],
    testimonial: {
      quote:
        "We came in with a rough product spec and they returned a launch-ready platform. The render queue and cost-cap work alone saved us from a serious AI API bill on day one.",
      author: "Jonas Weber",
      role: "Founder",
      company: "HammerPath",
      image: "",
    },
    technologies: ["Next.js", "TypeScript", "Python / FastAPI", "Redis", "PostgreSQL", "Stripe"],
    relatedServices: ["web-development", "ai-automation"],
  },
  "4": {
    title: "Smart Learning Arabia — AI Teaching Content",
    category: "AI & Automation",
    client: "Smart Learning Arabia",
    industry: "EdTech",
    duration: "Ongoing",
    heroImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&h=1080&q=80",
    result: "AI-presenter video lessons produced at scale",
    overview:
      "Smart Learning Arabia needed a way to produce a steady volume of educational video content with consistent on-camera presenters. Hiring presenters and studio time per lesson didn't scale to their roadmap.",
    challenge:
      "They needed multiple AI presenters with consistent identities across hundreds of lessons, accurate Arabic and English voiceover, and a turnaround fast enough to keep their publishing calendar.",
    solution:
      "We set up an AI video production pipeline using HeyGen for presenter consistency and ElevenLabs for natural-sounding voiceover, plus a templated post-production system to keep visual identity uniform across the catalog.",
    implementation: [
      "Selected and standardized AI presenter avatars for the brand",
      "Built bilingual (Arabic + English) voiceover workflows",
      "Created lesson templates with consistent intros, lower thirds, and outros",
      "Set up a per-lesson production checklist for QA and review",
      "Trained the in-house team to operate the pipeline independently",
    ],
    results: [
      { metric: "Per-Lesson Time", value: "Hours, not days", description: "From script to final cut" },
      { metric: "Languages", value: "Arabic + English", description: "Native-quality voiceover in both" },
      { metric: "Visual Consistency", value: "Templated", description: "Same lockups across full catalog" },
      { metric: "Handover", value: "In-house ready", description: "Client team operates pipeline" },
    ],
    testimonial: {
      quote:
        "The pipeline they handed us is the actual deliverable. We can publish lessons on our own cadence now without going back to a vendor for every video.",
      author: "Khalid Al-Rashid",
      role: "Director of Learning",
      company: "Smart Learning Arabia",
      image: "",
    },
    technologies: ["HeyGen", "ElevenLabs", "Adobe Premiere", "After Effects"],
    relatedServices: ["ai-automation", "branding"],
  },
  "7": {
    title: "Marketlyn - AI-Powered Marketing Platform",
    category: "Web Development",
    client: "Marketlyn",
    industry: "Marketing Technology",
    duration: "6 months",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&h=1080&q=80",
    result: "10K+ active users",
    overview:
      "Marketlyn is an innovative AI-powered marketing platform designed to help businesses automate and optimize their digital marketing campaigns. We built a comprehensive SaaS solution from the ground up.",
    challenge:
      "Building a competitive marketing SaaS platform required advanced AI/ML capabilities, real-time data processing, intuitive user interface, and seamless integration with major marketing platforms. Scalability and performance were critical.",
    solution:
      "We developed a full-stack Next.js application with integrated AI models, real-time analytics dashboard, multi-channel campaign management, and predictive analytics capabilities.",
    implementation: [
      "Architected scalable cloud infrastructure on AWS",
      "Developed AI/ML models for campaign optimization",
      "Built real-time analytics and reporting dashboard",
      "Integrated with Meta, Google Ads, and other platforms",
      "Implemented user authentication and access controls",
      "Created comprehensive API for third-party integrations",
      "Built admin dashboard for platform management",
      "Deployed monitoring and analytics infrastructure",
    ],
    results: [
      { metric: "Active Users", value: "10K+", description: "Users across multiple regions" },
      { metric: "Campaign Optimization", value: "+35%", description: "Improvement in ROI" },
      { metric: "Processing", value: "Real-time", description: "Analytics and reporting" },
      { metric: "Uptime", value: "99.95%", description: "Platform availability" },
      { metric: "Response Time", value: "< 200ms", description: "Average API response" },
      { metric: "User Satisfaction", value: "4.8/5", description: "Average rating" },
    ],
    testimonial: {
      quote:
        "The Mett Global team delivered a marketing platform that matched the vision we walked in with. The scalability and the analytics layer were the parts I was most worried about, and both held up at launch.",
      author: "Sarah Mitchell",
      role: "CEO",
      company: "Marketlyn",
      image: "",
    },
    technologies: ["Next.js", "Python", "TensorFlow", "AWS", "PostgreSQL", "Redis"],
    relatedServices: ["web-development", "ai-automation", "lead-generation"],
  },
  "8": {
    title: "AZ Remote Books — ACCA & CA Study Resources Platform",
    category: "eCommerce",
    client: "AZ Remote Books",
    industry: "Accountancy Education",
    duration: "4 months",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&h=1080&q=80",
    result: "Online catalog + checkout for ACCA and CA learners",
    overview:
      "AZ Remote Books needed a focused online platform to sell ACCA and CA study materials — textbooks, revision kits, and exam-prep resources — to accountancy students across Pakistan and the wider region. The previous setup was order-by-WhatsApp, which capped reach and made stock and payments painful to manage.",
    challenge:
      "The catalog had to be organized the way students actually shop — by paper code (F1, F2, P1, etc.), exam session, and publisher (Kaplan, BPP, Becker). Payments had to work for student-budget transactions, and the team needed a back-office that didn't require a developer to update titles every exam window.",
    solution:
      "We built a Next.js storefront with a paper-code-aware catalog, integrated card and bank-transfer payments, and a self-serve admin so the team can roll the catalog over each new exam session without engineering help.",
    implementation: [
      "Catalog modelled around ACCA + CA paper codes, levels, and exam sessions",
      "Search and filters for paper, publisher, edition, and stock status",
      "Integrated card and local bank-transfer checkout for student-friendly payments",
      "Order management dashboard for the AZ team to fulfil and dispatch",
      "Self-serve admin to add titles, update editions, and manage stock per session",
      "Mobile-first design — most accountancy students browse on their phone",
    ],
    results: [
      { metric: "Catalog Coverage", value: "ACCA + CA", description: "All papers across both qualifications" },
      { metric: "Checkout", value: "Card + Bank", description: "Multiple payment options for students" },
      { metric: "Admin", value: "Self-serve", description: "Team rolls over each exam session without dev work" },
      { metric: "Mobile Traffic", value: "Majority", description: "Built mobile-first for student usage" },
    ],
    testimonial: {
      quote:
        "We went from juggling WhatsApp orders to running a real storefront. The team understood the ACCA paper-code structure without us having to explain every detail, and the admin makes session rollovers actually manageable.",
      author: "Asad Zia",
      role: "Founder",
      company: "AZ Remote Books",
      image: "",
    },
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS S3", "Elasticsearch"],
    relatedServices: ["web-development", "ecommerce", "ai-automation"],
  },
  "9": {
    title: "Codminal — Service-Based Business Website",
    category: "Web Development",
    client: "Codminal",
    industry: "Professional Services",
    duration: "8 weeks",
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&h=1080&q=80",
    result: "Service catalog + enquiry pipeline live",
    overview:
      "Codminal is a service-based business that needed a website doing the work of a sales rep — clearly explaining their service offerings, qualifying inbound interest, and routing every enquiry into a workable pipeline.",
    challenge:
      "Their previous site was brochure-style and treated every visitor the same. Enquiries arrived without context, and the team spent the first call gathering basics that the form should have captured.",
    solution:
      "We rebuilt the site around the service catalog, with each service page laying out scope, deliverables, and a tailored enquiry form that pre-qualifies the lead before it lands in the team's inbox.",
    implementation: [
      "Service catalog architecture with one detailed page per offering",
      "Per-service enquiry forms capturing scope, timeline, and budget signals",
      "Lead routing so each enquiry reaches the right specialist on the team",
      "Case-study and testimonial sections for service-level social proof",
      "FAQ and process sections to reduce 'just browsing' questions on first calls",
      "SEO targeting service-intent search terms",
    ],
    results: [
      { metric: "Enquiry Quality", value: "Pre-qualified", description: "Scope + budget captured up-front" },
      { metric: "Routing", value: "By service", description: "Enquiries go to the right specialist" },
      { metric: "Sales Cycle", value: "Shorter first calls", description: "No more basic-discovery calls" },
      { metric: "Self-serve content", value: "Process + FAQ", description: "Reduces low-intent inbound" },
    ],
    testimonial: {
      quote:
        "First calls used to be discovery. Now they're already a step further because the form captured what we needed. That single change shortened our sales cycle.",
      author: "David Kumar",
      role: "Director",
      company: "Codminal",
      image: "",
    },
    technologies: ["Next.js", "Tailwind CSS", "Vercel", "Mailgun"],
    relatedServices: ["web-development", "branding", "lead-generation"],
  },
  "10": {
    title: "Sfykea — At-Home Car Wash Booking Platform",
    category: "Web Development",
    client: "Sfykea",
    industry: "Mobile Auto Care",
    duration: "4 months",
    heroImage: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1920&h=1080&q=80",
    result: "Booking + technician dispatch live across multiple cities",
    overview:
      "Sfykea is an at-home car wash service — customers book a wash package, pick a time slot, and a technician arrives at their home or office to clean the vehicle. We built the booking platform, customer app experience, and the back-office that keeps the technician network running.",
    challenge:
      "The business depended on three things working together: customers being able to book in under a minute, technicians knowing where to go and when, and the operations team being able to manage capacity per area without spreadsheets. The previous flow was WhatsApp-only and didn't scale past one city.",
    solution:
      "We built a Next.js booking platform with an address + time-slot picker, integrated payments, and an operations dashboard that maps bookings to available technicians in each service area.",
    implementation: [
      "Designed a fast mobile-first booking flow (package → location → time → pay)",
      "Built service-area logic so customers only see slots their nearest technician can fulfill",
      "Integrated card and cash-on-arrival payment options",
      "Created the operations dashboard for assigning bookings to technicians",
      "Built a technician view showing the day's schedule + customer addresses",
      "Set up SMS + WhatsApp notifications for booking confirmation and reminders",
    ],
    results: [
      { metric: "Booking Time", value: "< 1 min", description: "From package selection to confirmation" },
      { metric: "Service Areas", value: "Multi-city", description: "Capacity-aware slots per area" },
      { metric: "Operations", value: "No spreadsheets", description: "Dispatch handled in-platform" },
      { metric: "Notifications", value: "SMS + WhatsApp", description: "Confirmations and reminders" },
    ],
    testimonial: {
      quote:
        "The dispatch dashboard is what changed our day-to-day. We went from coordinating bookings on WhatsApp to running multiple cities from one screen, and customers book themselves without us getting on the phone.",
      author: "Talha Mirza",
      role: "Founder",
      company: "Sfykea",
      image: "",
    },
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "Twilio", "PostgreSQL"],
    relatedServices: ["web-development", "lead-generation"],
  },
  "11": {
    title: "Ittehad Steel Industries — Corporate & Product Catalog",
    category: "Web Development",
    client: "Ittehad Steel Industries",
    industry: "Steel Manufacturing",
    duration: "3 months",
    heroImage: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1920&h=1080&q=80",
    result: "B2B catalog + RFQ pipeline live",
    overview:
      "Ittehad Steel Industries is one of Pakistan's established steel manufacturers, supplying rebar and structural steel products to construction and infrastructure projects. They needed a credible corporate presence and a product catalog that procurement teams could actually use to scope and request quotes.",
    challenge:
      "Their previous site didn't reflect the scale of the business or the spec depth that contractors and engineers expect. RFQ requests came in via phone — slow to track and impossible to attribute. Mobile experience was poor, even though most field-side enquiries come from phones.",
    solution:
      "We built a Next.js corporate site with a structured product catalog (rebar grades, sections, sheets) and an RFQ flow that captures quantity, grade, project context, and routes the lead straight to the sales team's inbox and CRM.",
    implementation: [
      "Information architecture organized around product categories and grades",
      "Product catalog with technical specifications, standards, and downloadable spec sheets",
      "RFQ form with grade/quantity/site fields wired to the sales inbox + CRM",
      "Mill credentials, certifications, and project showcase pages for B2B credibility",
      "Mobile-first layout — most contractor enquiries come from phones on-site",
      "SEO targeting steel-grade and construction-procurement search terms",
    ],
    results: [
      { metric: "RFQ Capture", value: "Structured", description: "Grade, quantity, and project context per lead" },
      { metric: "Sales Workflow", value: "CRM-routed", description: "Every enquiry lands in the right pipeline" },
      { metric: "Mobile UX", value: "Field-ready", description: "Engineers can spec on-site from phones" },
      { metric: "SEO", value: "Industry-targeted", description: "Ranks for steel-grade and procurement terms" },
    ],
    testimonial: {
      quote:
        "The RFQ form changed how our sales team works — every enquiry comes in with the grade, quantity, and project information they need to quote on the same day. That's the part that mattered.",
      author: "Hassan Ahmed",
      role: "Sales Director",
      company: "Ittehad Steel Industries",
      image: "",
    },
    technologies: ["Next.js", "Tailwind CSS", "Vercel", "Mailgun", "Analytics"],
    relatedServices: ["web-development", "branding", "lead-generation"],
  },
  "12": {
    title: "Hyundai Islamabad - Automotive Portal",
    category: "eCommerce",
    client: "Hyundai Islamabad",
    industry: "Automotive Retail",
    duration: "4 months",
    heroImage: "/casestudy/hyundai.jfif",
    result: "Increased showroom visits 150%",
    overview:
      "We developed a comprehensive automotive platform for Hyundai Islamabad, featuring vehicle catalogs, financing options, dealership locator, and service booking system.",
    challenge:
      "Building an automotive digital platform required detailed vehicle information management, financing calculator integration, service center locator, appointment booking, and customer inquiry system.",
    solution:
      "We created a feature-rich automotive portal with vehicle showcase, financing calculator, dealer locator, service booking, and customer relationship management.",
    implementation: [
      "Built vehicle catalog with detailed specifications",
      "Developed interactive financing calculator",
      "Created dealer and service center locator",
      "Implemented service appointment booking system",
      "Built customer inquiry management",
      "Integrated virtual showroom and 360° views",
      "Created mobile app for accessibility",
      "Implemented customer testimonials and reviews",
    ],
    results: [
      { metric: "Showroom Visits", value: "+150%", description: "Increase from portal" },
      { metric: "Bookings/Month", value: "800+", description: "Service appointments" },
      { metric: "Inquiries", value: "2K+", description: "Customer inquiries monthly" },
      { metric: "Mobile Users", value: "70%", description: "Mobile app users" },
      { metric: "Satisfaction", value: "4.7/5", description: "Customer rating" },
      { metric: "Lead Conversion", value: "32%", description: "To test drive" },
    ],
    testimonial: {
      quote:
        "Service-bookings and test-drive requests both moved in the right direction once the portal went live. The financing calculator and dealer locator do real work for our customers — not just visual filler.",
      author: "Fahad Ali",
      role: "Sales Director",
      company: "Hyundai Islamabad",
      image: "",
    },
    technologies: ["Next.js", "Firebase", "Stripe", "Google Maps API", "AWS"],
    relatedServices: ["ecommerce", "web-development", "lead-generation"],
  },
  "13": {
    title: "Jetour Pakistan — Dealership Website",
    category: "Web Development",
    client: "Jetour Pakistan (Ittehad Motors)",
    industry: "Automotive Retail",
    duration: "10 weeks",
    heroImage: "/casestudy/jetour.jfif",
    result: "Model showcase, test-drive booking & dealer locator — live",
    overview:
      "Jetour Pakistan, operated under the Ittehad Motors group, needed a dealership website that did the work of a showroom — model showcases for the Coolray, T2, X70, and the rest of the lineup, plus a clean way for prospective buyers to book a test drive and locate their nearest dealer.",
    challenge:
      "Most automotive sites in the region either underperform on mobile or treat the website as a brochure. Jetour needed inbound test-drive requests to actually land in the sales team's CRM with the customer's preferred dealer pre-attached, not as anonymous form submissions.",
    solution:
      "We built a Next.js dealership site with detailed model pages, a test-drive booking flow that captures the customer's preferred dealership and time window, and a dealer locator wired to Google Maps for the nationwide network.",
    implementation: [
      "Built model pages with specs, gallery, color picker, and trim comparison",
      "Test-drive booking flow with dealer + time-slot selection",
      "Dealer locator using Google Maps API for the nationwide network",
      "Lead routing so each test-drive request lands at the chosen dealership",
      "Mobile-first design — automotive shopping starts on the phone",
      "SEO targeting model names and Pakistan-market automotive search terms",
    ],
    results: [
      { metric: "Test Drives", value: "Routed", description: "Direct to the customer's chosen dealer" },
      { metric: "Mobile First", value: "Built-in", description: "Designed for phone-first shopping" },
      { metric: "Dealer Locator", value: "Nationwide", description: "Live Google Maps integration" },
      { metric: "SEO", value: "Model-targeted", description: "Ranks for Coolray, T2, X70 in PK searches" },
    ],
    testimonial: {
      quote:
        "The test-drive booking flow does what we hoped it would — leads land at the correct dealership with the customer's preferred slot, and our team follows up the same day. The model pages also do real work in the buying conversation.",
      author: "Usman Khan",
      role: "Operations Manager",
      company: "Jetour Pakistan",
      image: "",
    },
    technologies: ["Next.js", "TypeScript", "Google Maps API", "Vercel", "PostgreSQL"],
    relatedServices: ["web-development", "branding", "lead-generation"],
  },
}

export default function CaseStudyDetailPage() {
  const params = useParams()
  const id = params.id as string
  const caseStudy = caseStudiesData[id]

  if (!caseStudy) {
    return (
      <main className="relative min-h-screen overflow-hidden noise-overlay">
        <AnimatedBackground />
        <Navigation />
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
          <Link href="/case-studies" className="text-primary hover:underline">
            View All Case Studies
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 text-xs font-mono rounded-full glass-subtle">
                {caseStudy.category}
              </span>
              <span className="text-sm text-muted-foreground">{caseStudy.industry}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-6">
              {caseStudy.title}
            </h1>
            <div className="flex items-center gap-2 text-xl text-primary font-semibold mb-8">
              <TrendingUp className="w-6 h-6" />
              {caseStudy.result}
            </div>

            <div className="flex flex-wrap gap-8 text-sm">
              <div>
                <span className="text-muted-foreground block">Client</span>
                <span className="font-medium">{caseStudy.client}</span>
              </div>
              <div>
                <span className="text-muted-foreground block">Industry</span>
                <span className="font-medium">{caseStudy.industry}</span>
              </div>
              <div>
                <span className="text-muted-foreground block">Duration</span>
                <span className="font-medium">{caseStudy.duration}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{caseStudy.overview}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass"
            >
              <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass-strong"
            >
              <h2 className="text-2xl font-bold mb-6 text-gradient">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-foreground/90">How we</span>{" "}
              <span className="text-gradient">delivered</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
            {caseStudy.implementation.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl glass"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-foreground/90">The</span>{" "}
              <span className="text-gradient">Results</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {caseStudy.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl glass hover:glass-strong transition-all duration-300 text-center"
              >
                <div className="text-4xl font-bold text-gradient mb-2">{result.value}</div>
                <div className="font-semibold mb-1">{result.metric}</div>
                <div className="text-sm text-muted-foreground">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-12 rounded-3xl glass-strong relative"
          >
            <Quote className="absolute top-8 left-8 w-16 h-16 text-primary/20" />

            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8 relative z-10">
              "{caseStudy.testimonial.quote}"
            </p>

            <div className="flex items-center gap-4">
              {caseStudy.testimonial.image ? (
                <img
                  src={caseStudy.testimonial.image}
                  alt={caseStudy.testimonial.author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-foreground font-semibold ring-2 ring-primary/20">
                  {caseStudy.testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
              )}
              <div>
                <div className="font-semibold">{caseStudy.testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {caseStudy.testimonial.role}, {caseStudy.testimonial.company}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-6">Technologies & Tools Used</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {caseStudy.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full glass-subtle text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
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
              <span className="text-foreground/90">Want similar</span>{" "}
              <span className="text-gradient">results?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with the same level of expertise and dedication.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl bg-primary text-primary-foreground hover:glow-primary transition-all duration-500"
            >
              Start Your Project
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
