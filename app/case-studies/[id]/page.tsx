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
    title: "Global Retailer Revenue Transformation",
    category: "eCommerce",
    client: "Fashion Brand",
    industry: "Retail & Fashion",
    duration: "6 months",
    heroImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1920&h=1080&q=80",
    result: "320% revenue increase",
    overview:
      "A leading fashion brand approached us with stagnating online sales and underperforming marketplace listings. They needed a comprehensive strategy to revitalize their eCommerce presence and expand into new markets.",
    challenge:
      "The client faced multiple challenges: poor product visibility on Amazon, inefficient PPC campaigns with high ACoS, limited marketplace presence, and inventory management issues causing stockouts during peak seasons. Their conversion rate was below industry average, and they lacked a cohesive multi-channel strategy.",
    solution:
      "We implemented a complete marketplace transformation strategy focusing on listing optimization, strategic PPC management, multi-marketplace expansion, and advanced inventory forecasting. Our team also redesigned their brand presence with A+ Content and enhanced brand storytelling.",
    implementation: [
      "Conducted comprehensive audit of existing listings and identified optimization opportunities",
      "Redesigned product listings with SEO-optimized titles, bullet points, and descriptions",
      "Created A+ Content and Brand Story for all ASINs",
      "Restructured PPC campaigns with strategic keyword targeting",
      "Implemented automated bidding strategies and dayparting",
      "Expanded to Amazon UK, EU, and Australia marketplaces",
      "Set up FBA inventory management with demand forecasting",
      "Developed brand protection strategy against hijackers",
    ],
    results: [
      { metric: "Revenue Growth", value: "320%", description: "Increase in total marketplace revenue" },
      { metric: "ACoS Reduction", value: "45%", description: "Decrease in advertising cost of sale" },
      { metric: "Markets Expanded", value: "5", description: "New international marketplaces" },
      { metric: "Conversion Rate", value: "+67%", description: "Improvement in listing conversion" },
      { metric: "Organic Ranking", value: "Top 3", description: "For main product keywords" },
      { metric: "ROI", value: "12x", description: "Return on investment" },
    ],
    testimonial: {
      quote:
        "Mett Global completely transformed our eCommerce business. The team's expertise in marketplace optimization and their data-driven approach delivered results beyond our expectations. We've seen unprecedented growth in just 6 months.",
      author: "Sarah Chen",
      role: "CEO",
      company: "Fashion Brand",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    },
    technologies: ["Amazon Seller Central", "Helium 10", "Jungle Scout", "Custom Analytics Dashboard"],
    relatedServices: ["ecommerce", "branding", "supply-chain"],
  },
  "2": {
    title: "Enterprise Security Overhaul",
    category: "Cybersecurity",
    client: "FinTech Startup",
    industry: "Financial Technology",
    duration: "3 months",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&h=1080&q=80",
    result: "Zero breaches post-implementation",
    overview:
      "A rapidly growing FinTech startup handling sensitive financial data needed to strengthen their security posture to meet compliance requirements and protect against increasingly sophisticated cyber threats.",
    challenge:
      "The startup had grown quickly without proper security infrastructure. They faced vulnerabilities across their application layer, insufficient access controls, lack of security monitoring, and needed to achieve SOC2 and PCI-DSS compliance for enterprise clients.",
    solution:
      "We conducted a comprehensive security assessment followed by a multi-phase implementation of security controls, penetration testing, compliance preparation, and ongoing security monitoring.",
    implementation: [
      "Performed thorough security audit and vulnerability assessment",
      "Conducted black-box and white-box penetration testing",
      "Implemented Web Application Firewall (WAF) and DDoS protection",
      "Deployed Security Information and Event Management (SIEM) system",
      "Established Identity and Access Management (IAM) policies",
      "Implemented end-to-end encryption for all data in transit and at rest",
      "Created incident response procedures and runbooks",
      "Conducted employee security awareness training",
    ],
    results: [
      { metric: "Vulnerabilities Fixed", value: "147", description: "Critical and high severity issues resolved" },
      { metric: "Compliance", value: "100%", description: "SOC2 and PCI-DSS compliant" },
      { metric: "Security Score", value: "A+", description: "Industry security rating achieved" },
      { metric: "Incidents", value: "0", description: "Security breaches post-implementation" },
      { metric: "Response Time", value: "< 5min", description: "Average incident detection time" },
      { metric: "Uptime", value: "99.99%", description: "System availability maintained" },
    ],
    testimonial: {
      quote:
        "The security transformation led by Mett Global was exceptional. They identified vulnerabilities we didn't know existed and implemented robust security measures. We've had zero security incidents since, and we're now able to serve enterprise clients confidently.",
      author: "Michael Rodriguez",
      role: "CTO",
      company: "FinTech Startup",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    },
    technologies: ["Cloudflare", "AWS Security Hub", "Splunk", "CrowdStrike", "HashiCorp Vault"],
    relatedServices: ["cybersecurity", "web-development", "it-helpdesk"],
  },
  "3": {
    title: "AI-Powered Customer Service",
    category: "AI & Automation",
    client: "SaaS Company",
    industry: "Software & Technology",
    duration: "4 months",
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&h=1080&q=80",
    result: "75% reduction in response time",
    overview:
      "A B2B SaaS company with a growing customer base was struggling to scale their customer support operations while maintaining quality. They needed an AI-driven solution to handle increasing support volume.",
    challenge:
      "The company was experiencing exponential growth but support response times were increasing, customer satisfaction was declining, and hiring fast enough to meet demand was proving impossible. They needed to scale support without proportionally scaling costs.",
    solution:
      "We implemented a comprehensive AI-powered customer service solution combining intelligent chatbots, automated ticket routing, predictive support, and human-AI collaboration workflows.",
    implementation: [
      "Analyzed historical support data to identify common queries and patterns",
      "Developed and trained custom AI chatbot for first-line support",
      "Implemented intelligent ticket routing based on query complexity",
      "Created automated responses for common issues",
      "Built predictive support system to anticipate customer needs",
      "Integrated AI with existing CRM and helpdesk systems",
      "Established escalation workflows for complex issues",
      "Deployed continuous learning system for AI improvement",
    ],
    results: [
      { metric: "Response Time", value: "-75%", description: "Reduction in average response time" },
      { metric: "Customer Satisfaction", value: "94%", description: "CSAT score achieved" },
      { metric: "Cost Saved", value: "$2.3M", description: "Annual support cost savings" },
      { metric: "Ticket Automation", value: "68%", description: "Tickets resolved without human intervention" },
      { metric: "Agent Productivity", value: "+45%", description: "Increase in agent efficiency" },
      { metric: "First Contact Resolution", value: "89%", description: "Issues resolved on first contact" },
    ],
    testimonial: {
      quote:
        "The AI solution from Mett Global revolutionized our customer support. We went from drowning in tickets to delivering instant, accurate responses. Our customers love it, and our support team can now focus on complex issues that truly need human expertise.",
      author: "Emily Watson",
      role: "VP of Customer Success",
      company: "SaaS Company",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
    },
    technologies: ["OpenAI GPT-4", "Custom ML Models", "Intercom", "Zendesk", "Python"],
    relatedServices: ["ai-automation", "customer-support", "web-development"],
  },
  "4": {
    title: "Brand Launch Campaign",
    category: "Marketing",
    client: "Consumer Goods",
    industry: "Consumer Products",
    duration: "3 months",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&h=1080&q=80",
    result: "1M+ impressions in 30 days",
    overview:
      "A new consumer goods brand entering a competitive market needed a comprehensive brand launch strategy to create awareness, build credibility, and drive initial sales.",
    challenge:
      "As a new entrant in a saturated market, the brand faced the challenge of zero brand recognition, established competitors with loyal customers, limited budget for launch, and the need to quickly establish trust with consumers.",
    solution:
      "We developed an integrated brand launch campaign combining brand identity development, influencer partnerships, multi-channel advertising, and PR activities to create maximum impact within budget.",
    implementation: [
      "Developed complete brand identity including logo, colors, and guidelines",
      "Created brand story and messaging framework",
      "Designed packaging and product photography",
      "Launched influencer partnership program with 50+ micro-influencers",
      "Executed multi-platform paid advertising campaign",
      "Implemented email marketing automation for lead nurturing",
      "Secured PR coverage in industry publications",
      "Set up social media presence with content calendar",
    ],
    results: [
      { metric: "Impressions", value: "1M+", description: "Total reach in first 30 days" },
      { metric: "Engagement Rate", value: "8.5%", description: "Average across all platforms" },
      { metric: "Leads Generated", value: "12K", description: "Qualified leads captured" },
      { metric: "Email Subscribers", value: "8.5K", description: "Newsletter sign-ups" },
      { metric: "Social Followers", value: "25K", description: "Combined social media following" },
      { metric: "Sales", value: "+340%", description: "Above projected first month sales" },
    ],
    testimonial: {
      quote:
        "Mett Global took our brand from concept to market leader in just 3 months. Their creative approach and data-driven strategies delivered results we didn't think possible. The campaign exceeded every metric we set.",
      author: "David Park",
      role: "Founder",
      company: "Consumer Goods Brand",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    },
    technologies: ["Meta Ads", "Google Ads", "Mailchimp", "Shopify", "Figma"],
    relatedServices: ["branding", "ecommerce", "lead-generation"],
  },
  "5": {
    title: "E-commerce Platform Rebuild",
    category: "Web Development",
    client: "B2B Wholesale",
    industry: "Wholesale Distribution",
    duration: "5 months",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&h=1080&q=80",
    result: "200% improvement in performance",
    overview:
      "A B2B wholesale distributor with an outdated e-commerce platform was losing customers to competitors with better user experiences. They needed a modern, fast, and feature-rich platform.",
    challenge:
      "The legacy platform was slow, difficult to navigate, lacked mobile support, had limited payment options, and couldn't handle peak traffic. Integration with their ERP was manual and error-prone, causing inventory discrepancies.",
    solution:
      "We built a custom Next.js e-commerce platform with real-time ERP integration, advanced inventory management, multi-tier pricing, and a streamlined B2B purchasing experience.",
    implementation: [
      "Conducted UX research with existing customers",
      "Designed intuitive B2B-focused user interface",
      "Built custom Next.js e-commerce platform",
      "Developed real-time ERP integration layer",
      "Implemented advanced inventory management system",
      "Created multi-tier pricing and customer group functionality",
      "Built quick order, reorder, and quote request features",
      "Migrated all existing data and customer accounts",
    ],
    results: [
      { metric: "Load Time", value: "-70%", description: "Improvement in page load speed" },
      { metric: "Conversions", value: "+45%", description: "Increase in conversion rate" },
      { metric: "Orders/Day", value: "3x", description: "Increase in daily orders" },
      { metric: "Mobile Orders", value: "+180%", description: "Orders from mobile devices" },
      { metric: "Cart Abandonment", value: "-35%", description: "Reduction in cart abandonment" },
      { metric: "Customer Satisfaction", value: "96%", description: "Post-launch satisfaction score" },
    ],
    testimonial: {
      quote:
        "The new platform is a game-changer for our business. Our customers love the improved experience, and our team spends far less time on manual processes. Order volume has tripled, and we're finally able to compete with modern distributors.",
      author: "Robert Thompson",
      role: "Managing Director",
      company: "B2B Wholesale",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80",
    },
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    relatedServices: ["web-development", "ecommerce", "ai-automation"],
  },
  "6": {
    title: "Multi-Marketplace Expansion",
    category: "eCommerce",
    client: "Electronics Brand",
    industry: "Consumer Electronics",
    duration: "4 months",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&h=1080&q=80",
    result: "Expanded to 8 new markets",
    overview:
      "An established US electronics brand wanted to expand internationally but lacked the expertise and infrastructure to successfully enter new markets.",
    challenge:
      "The brand had strong US presence but no experience with international marketplaces. They faced challenges with localization, compliance, logistics, and understanding regional consumer preferences.",
    solution:
      "We developed a comprehensive international expansion strategy covering marketplace setup, localization, compliance, logistics partnerships, and regional marketing for each target market.",
    implementation: [
      "Conducted market research for each target region",
      "Registered brand and handled compliance requirements",
      "Localized all product listings for each market",
      "Set up logistics partnerships for each region",
      "Configured marketplace accounts and storefronts",
      "Implemented regional pricing strategies",
      "Launched localized advertising campaigns",
      "Established customer service for each language",
    ],
    results: [
      { metric: "New Markets", value: "8", description: "International markets entered" },
      { metric: "Revenue", value: "+180%", description: "Total revenue increase" },
      { metric: "SKUs Listed", value: "5K+", description: "Products across all markets" },
      { metric: "Market Share", value: "Top 10", description: "In 6 out of 8 new markets" },
      { metric: "Customer Reviews", value: "4.7★", description: "Average across all markets" },
      { metric: "Return Rate", value: "< 3%", description: "Below industry average" },
    ],
    testimonial: {
      quote:
        "Going international seemed daunting until we partnered with Mett Global. They handled everything from compliance to localization, and within 4 months we were selling in 8 new markets. The revenue impact has been transformational.",
      author: "Jennifer Liu",
      role: "VP of Sales",
      company: "Electronics Brand",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    },
    technologies: ["Amazon Global", "eBay International", "Custom ERP Integration", "Translation APIs"],
    relatedServices: ["ecommerce", "supply-chain", "branding"],
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
        "The Mett Global team delivered an exceptional marketing platform that exceeded our vision. Their expertise in AI, scalability, and user experience design was instrumental in our success. We've attracted thousands of users in our first months.",
      author: "Sarah Mitchell",
      role: "CEO",
      company: "Marketlyn",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    },
    technologies: ["Next.js", "Python", "TensorFlow", "AWS", "PostgreSQL", "Redis"],
    relatedServices: ["web-development", "ai-automation", "lead-generation"],
  },
  "8": {
    title: "AZ Remote Books - Remote Reading Platform",
    category: "eCommerce",
    client: "AZ Remote Books",
    industry: "Digital Publishing",
    duration: "4 months",
    heroImage: "https://images.unsplash.com/photo-1507842217343-583f20270419?auto=format&fit=crop&w=1920&h=1080&q=80",
    result: "50K+ books available",
    overview:
      "AZ Remote Books is a digital platform that provides remote access to an extensive collection of books and learning materials. We developed a user-friendly platform for book discovery, borrowing, and reading.",
    challenge:
      "Creating a robust digital library platform required efficient content management, secure access controls, multi-device compatibility, and excellent search/discovery capabilities. Managing hundreds of thousands of digital assets was complex.",
    solution:
      "We built a comprehensive e-learning platform with digital rights management, advanced search, personalized recommendations, and multi-device reading experience.",
    implementation: [
      "Designed scalable content management system",
      "Implemented digital rights and DRM protection",
      "Built advanced search and filtering system",
      "Created personalized recommendation engine",
      "Developed mobile-responsive reading interface",
      "Integrated payment and subscription system",
      "Built borrowing and return workflow",
      "Implemented user analytics and tracking",
    ],
    results: [
      { metric: "Books Available", value: "50K+", description: "Digital titles in library" },
      { metric: "Active Users", value: "25K+", description: "Registered members" },
      { metric: "Monthly Borrowing", value: "100K+", description: "Books borrowed monthly" },
      { metric: "Platform Growth", value: "+200%", description: "Year-over-year increase" },
      { metric: "User Retention", value: "65%", description: "Monthly retention rate" },
      { metric: "Avg Session", value: "45 mins", description: "Average session duration" },
    ],
    testimonial: {
      quote:
        "The platform that Mett Global built has revolutionized how people access books. The search functionality is excellent, the interface is intuitive, and the technical performance is outstanding. We've exceeded our growth targets.",
      author: "Michael Chen",
      role: "Founder",
      company: "AZ Remote Books",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    },
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS S3", "Elasticsearch"],
    relatedServices: ["web-development", "ecommerce", "ai-automation"],
  },
  "9": {
    title: "Codminal - Developer Dashboard & Admin Panel",
    category: "Web Development",
    client: "Codminal",
    industry: "Software Development Tools",
    duration: "5 months",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1920&h=1080&q=80",
    result: "Enterprise-grade admin dashboard",
    overview:
      "Codminal is a comprehensive admin dashboard and developer tools platform. We built a powerful backend management system and API dashboard for developers to manage their applications.",
    challenge:
      "Creating an enterprise-level admin dashboard required handling complex user hierarchies, permissions management, real-time data updates, extensive analytics, and high security standards.",
    solution:
      "We developed a sophisticated admin dashboard with role-based access control, real-time monitoring, advanced analytics, API management, and comprehensive audit logging.",
    implementation: [
      "Designed role-based access control (RBAC) system",
      "Built real-time monitoring and alerting system",
      "Created analytics and reporting dashboards",
      "Implemented API management and documentation",
      "Developed audit logging and compliance tracking",
      "Built team and permission management features",
      "Created automated workflow and automation builder",
      "Implemented security and breach detection",
    ],
    results: [
      { metric: "Enterprise Users", value: "500+", description: "Enterprise clients" },
      { metric: "Permissions", value: "256+", description: "Granular permission levels" },
      { metric: "Real-time Updates", value: "< 1s", description: "Data synchronization" },
      { metric: "API Calls/Day", value: "100M+", description: "Processed through platform" },
      { metric: "Security Score", value: "A+", description: "Security rating" },
      { metric: "Uptime", value: "99.99%", description: "Guaranteed availability" },
    ],
    testimonial: {
      quote:
        "The admin dashboard built by Mett Global is exactly what we needed. It's powerful, secure, and incredibly user-friendly. Our team's productivity has increased significantly, and our clients love the new management capabilities.",
      author: "David Kumar",
      role: "CTO",
      company: "Codminal",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    },
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "GraphQL", "AWS"],
    relatedServices: ["web-development", "cybersecurity", "ai-automation"],
  },
  "10": {
    title: "Sfykea - Full-Stack E-Commerce & Admin Suite",
    category: "eCommerce",
    client: "Sfykea",
    industry: "Furniture & E-Commerce",
    duration: "7 months",
    heroImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1920&h=1080&q=80",
    result: "$2.5M revenue in Year 1",
    overview:
      "Sfykea is a modern furniture e-commerce platform with a sophisticated admin dashboard. We built a complete solution including customer-facing store and comprehensive admin portal for inventory, order, and customer management.",
    challenge:
      "Building a full-featured e-commerce platform required managing complex product catalogs, real-time inventory, sophisticated admin controls, beautiful product showcases, and seamless payment integration.",
    solution:
      "We developed a complete Next.js e-commerce platform with an advanced admin dashboard for inventory management, order processing, customer analytics, and marketing automation.",
    implementation: [
      "Built responsive e-commerce storefront with product catalog",
      "Implemented advanced admin dashboard for business operations",
      "Developed inventory management and forecasting system",
      "Created order management and fulfillment workflows",
      "Integrated multiple payment processors",
      "Built customer relationship management features",
      "Implemented marketing automation and email campaigns",
      "Created analytics and business intelligence dashboard",
    ],
    results: [
      { metric: "Revenue", value: "$2.5M", description: "First year revenue" },
      { metric: "Products", value: "5K+", description: "Active SKUs in catalog" },
      { metric: "Orders/Month", value: "3K+", description: "Monthly order volume" },
      { metric: "Conversion Rate", value: "3.8%", description: "Above industry average" },
      { metric: "Customer Base", value: "15K+", description: "Active customers" },
      { metric: "Growth Rate", value: "+45%", description: "Month-over-month" },
    ],
    testimonial: {
      quote:
        "Mett Global delivered a world-class e-commerce platform and admin dashboard that far exceeded our expectations. The platform handles our complex operations beautifully, and the admin dashboard gives us complete control. Our revenue growth speaks for itself.",
      author: "Amanda Foster",
      role: "CEO",
      company: "Sfykea",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    },
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Sendgrid"],
    relatedServices: ["ecommerce", "web-development", "lead-generation"],
  },
  "11": {
    title: "Ittehad - Corporate Website & Brand Presence",
    category: "Web Development",
    client: "Ittehad",
    industry: "Corporate Services",
    duration: "3 months",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&h=1080&q=80",
    result: "Professional brand identity",
    overview:
      "Ittehad is a leading corporate services firm. We developed their corporate website and brand presence to showcase their expertise, services, and establish authority in their market.",
    challenge:
      "Creating a sophisticated corporate presence required professional design, clear service differentiation, lead capture optimization, and SEO for competitive keywords.",
    solution:
      "We built a modern, responsive corporate website with service showcases, case study sections, blog, and optimized lead capture forms with marketing automation integration.",
    implementation: [
      "Designed modern, professional website interface",
      "Developed responsive layout for all devices",
      "Created service showcase and portfolio sections",
      "Built case study and success story pages",
      "Implemented lead capture and CRM integration",
      "Created blog platform with SEO optimization",
      "Built contact and inquiry management system",
      "Implemented analytics and tracking",
    ],
    results: [
      { metric: "Monthly Visitors", value: "8K+", description: "Website traffic" },
      { metric: "Lead Generation", value: "200+", description: "Qualified leads monthly" },
      { metric: "Conversion Rate", value: "2.5%", description: "Visitor to lead" },
      { metric: "SEO Ranking", value: "Top 5", description: "For target keywords" },
      { metric: "Mobile Traffic", value: "60%", description: "Mobile visitors" },
      { metric: "Bounce Rate", value: "< 35%", description: "Below industry average" },
    ],
    testimonial: {
      quote:
        "The website Mett Global created has been instrumental in our growth. We're seeing significantly more leads, and our online presence now reflects the quality of our services. The design is beautiful and professional.",
      author: "Hassan Ahmed",
      role: "Managing Director",
      company: "Ittehad",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1533473359331-35e646e0db4d?auto=format&fit=crop&w=1920&h=1080&q=80",
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
        "The automotive portal developed by Mett Global has transformed how we engage with customers. We've seen a significant increase in showroom visits and service bookings. The platform is user-friendly and performs flawlessly.",
      author: "Fahad Ali",
      role: "Sales Director",
      company: "Hyundai Islamabad",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    },
    technologies: ["Next.js", "Firebase", "Stripe", "Google Maps API", "AWS"],
    relatedServices: ["ecommerce", "web-development", "lead-generation"],
  },
  "13": {
    title: "Jetourittehad - Web Solutions",
    category: "Web Development",
    client: "Jetourittehad",
    industry: "Web Solutions & Technology",
    duration: "6 months",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1920&h=1080&q=80",
    result: "Full digital transformation",
    overview:
      "Jetourittehad required comprehensive web solutions including website redesign, development infrastructure, and digital ecosystem. We delivered a complete digital transformation.",
    challenge:
      "Modernizing their digital presence required rebuilding multiple websites, consolidating operations, improving performance, and creating a cohesive digital strategy.",
    solution:
      "We redesigned and rebuilt their entire web infrastructure with modern architecture, improved performance, scalability, and integrated digital marketing tools.",
    implementation: [
      "Audited existing web infrastructure",
      "Redesigned and built new website platform",
      "Migrated to modern architecture and hosting",
      "Implemented performance optimization",
      "Set up CDN and caching strategies",
      "Integrated marketing automation tools",
      "Implemented SEO and analytics",
      "Created data migration and integration systems",
    ],
    results: [
      { metric: "Performance", value: "+80%", description: "Improvement in speed" },
      { metric: "Traffic", value: "+120%", description: "Organic traffic increase" },
      { metric: "Conversions", value: "+65%", description: "Conversion rate improvement" },
      { metric: "Server Cost", value: "-40%", description: "Infrastructure savings" },
      { metric: "Downtime", value: "< 0.1%", description: "Uptime achieved" },
      { metric: "SEO Score", value: "98/100", description: "Google PageSpeed" },
    ],
    testimonial: {
      quote:
        "The digital transformation provided by Mett Global has been game-changing for our business. Our website is faster, more professional, we're getting more traffic and leads. The entire team's expertise was evident throughout the project.",
      author: "Usman Khan",
      role: "Operations Manager",
      company: "Jetourittehad",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    },
    technologies: ["Next.js", "TypeScript", "AWS", "Vercel", "PostgreSQL", "Redis"],
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
              <img
                src={caseStudy.testimonial.image}
                alt={caseStudy.testimonial.author}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
              />
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
