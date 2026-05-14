"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter, Facebook } from "lucide-react"

const blogPosts: Record<string, {
  id: number
  title: string
  category: string
  author: string
  authorImage: string
  authorBio: string
  date: string
  readTime: string
  content: string[]
  image: string
  tags: string[]
}> = {
  "1": {
    id: 1,
    title: "The Future of AI in E-commerce: 2025 Trends",
    category: "AI",
    author: "Hammad Ayub",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80",
    authorBio: "Founder & Head of Project Management at Mett Global",
    date: "Nov 20, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&h=1080&q=80",
    tags: ["AI", "E-commerce", "Machine Learning", "Automation"],
    content: [
      "Artificial intelligence is revolutionizing the e-commerce landscape at an unprecedented pace. As we move through 2025, businesses that fail to adopt AI-powered solutions risk falling behind their competitors.",
      "## Personalization at Scale",
      "One of the most significant trends we're seeing is hyper-personalization. AI algorithms now analyze customer behavior in real-time to deliver personalized product recommendations, dynamic pricing, and customized shopping experiences. This level of personalization was impossible just a few years ago.",
      "## Conversational Commerce",
      "AI-powered chatbots and virtual assistants have evolved beyond simple FAQ responses. Today's conversational AI can handle complex customer inquiries, process orders, and even upsell products naturally. The best implementations are indistinguishable from human agents.",
      "## Visual Search Revolution",
      "Visual search technology has matured significantly. Customers can now photograph a product they like and instantly find similar items across your catalog. This technology is particularly powerful in fashion and home decor sectors.",
      "## Predictive Analytics",
      "AI-driven predictive analytics helps businesses forecast demand with remarkable accuracy. This means better inventory management, reduced waste, and improved customer satisfaction through consistent product availability.",
      "## The Road Ahead",
      "As AI technology continues to evolve, we expect to see even more sophisticated applications in e-commerce. From augmented reality try-ons to AI-generated product descriptions, the possibilities are endless. Businesses that embrace these technologies now will be best positioned for success in the years to come.",
    ],
  },
  "2": {
    id: 2,
    title: "Essential Cybersecurity Practices for Small Businesses",
    category: "Cybersecurity",
    author: "Muhammad Rafey",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    authorBio: "Cybersecurity Lead at Mett Global",
    date: "Nov 18, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&h=1080&q=80",
    tags: ["Cybersecurity", "Small Business", "Data Protection", "Security"],
    content: [
      "Small businesses are increasingly becoming targets for cybercriminals. With 43% of cyberattacks now targeting small businesses, implementing robust security practices is no longer optional—it's essential for survival.",
      "## Start with the Basics",
      "Strong password policies, multi-factor authentication, and regular software updates form the foundation of good cybersecurity. These simple measures can prevent the majority of common attacks.",
      "## Employee Training",
      "Your employees are your first line of defense. Regular security awareness training helps staff identify phishing attempts, social engineering attacks, and other common threats.",
      "## Data Backup Strategy",
      "Implement a robust backup strategy following the 3-2-1 rule: three copies of your data, on two different media types, with one copy stored offsite. This protects against ransomware and data loss.",
      "## Network Security",
      "Segment your network, use firewalls, and implement VPNs for remote workers. Regular vulnerability assessments help identify and address weaknesses before attackers can exploit them.",
      "## Incident Response Plan",
      "Have a documented incident response plan ready. When a breach occurs, quick and coordinated action can significantly reduce damage and recovery time.",
    ],
  },
  "3": {
    id: 3,
    title: "Amazon FBA in 2025: Complete Guide",
    category: "eCommerce",
    author: "Ali Hassan",
    authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
    authorBio: "Co-Founder & eCommerce Strategy Lead at Mett Global",
    date: "Nov 15, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&h=1080&q=80",
    tags: ["Amazon", "FBA", "E-commerce", "Selling Online"],
    content: [
      "Amazon FBA continues to be one of the most lucrative opportunities for entrepreneurs. This comprehensive guide covers everything you need to know to succeed in 2025.",
      "## Understanding FBA Economics",
      "Before diving in, understand the fee structure. FBA fees include fulfillment fees, monthly storage fees, and long-term storage fees. Calculate your margins carefully before selecting products.",
      "## Product Research",
      "Successful FBA businesses start with thorough product research. Look for products with healthy demand, reasonable competition, and good profit margins. Tools like Helium 10 and Jungle Scout can help.",
      "## Sourcing Strategies",
      "Whether you choose private label, wholesale, or arbitrage, your sourcing strategy impacts your margins. Building relationships with reliable suppliers is crucial for long-term success.",
      "## Listing Optimization",
      "Your product listing is your storefront. Invest in professional photography, write compelling copy with relevant keywords, and use A+ content to stand out from competitors.",
      "## PPC Advertising",
      "Amazon advertising is essential for visibility. Start with automatic campaigns to gather data, then optimize with manual campaigns targeting profitable keywords.",
      "## Scaling Your Business",
      "Once you've established a profitable product, focus on expansion. Add variations, launch new products, and consider expanding to international marketplaces.",
    ],
  },
  "4": {
    id: 4,
    title: "Building Scalable Web Applications with Next.js",
    category: "Technology",
    author: "Umair Ahmed",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    authorBio: "Lead Developer at Mett Global",
    date: "Nov 12, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&h=1080&q=80",
    tags: ["Next.js", "React", "Web Development", "JavaScript"],
    content: [
      "Next.js has become the go-to framework for building production-ready React applications. Here's how to leverage its features for scalable web applications.",
      "## App Router Architecture",
      "Next.js 14's App Router provides a more intuitive file-based routing system. Understanding layouts, loading states, and error boundaries is key to building robust applications.",
      "## Server Components",
      "React Server Components reduce client-side JavaScript and improve performance. Use them for data fetching and static content while keeping interactive elements as Client Components.",
      "## Data Fetching Strategies",
      "Choose the right data fetching strategy: Static Generation for content that rarely changes, Server-Side Rendering for personalized content, and Client-Side fetching for real-time data.",
      "## Performance Optimization",
      "Leverage Next.js Image component, font optimization, and script loading strategies. Use the built-in analytics to identify and fix performance bottlenecks.",
      "## Deployment Best Practices",
      "Deploy on Vercel for the best experience, or use Docker for self-hosting. Implement proper caching strategies and CDN configuration for global performance.",
    ],
  },
  "5": {
    id: 5,
    title: "Digital Marketing Strategies That Actually Work",
    category: "Marketing",
    author: "Hammad Ayub",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80",
    authorBio: "Founder & Head of Project Management at Mett Global",
    date: "Nov 10, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&h=1080&q=80",
    tags: ["Marketing", "Digital Strategy", "SEO", "Social Media"],
    content: [
      "In a world of ever-changing algorithms and platforms, these proven digital marketing strategies continue to deliver results for businesses of all sizes.",
      "## Content Marketing Excellence",
      "Create valuable content that addresses your audience's pain points. Focus on quality over quantity, and develop a consistent publishing schedule.",
      "## SEO Fundamentals",
      "Technical SEO, quality content, and authoritative backlinks remain the pillars of search engine success. Focus on user experience signals and mobile optimization.",
      "## Social Media Strategy",
      "Choose platforms where your audience spends time. Focus on engagement over vanity metrics, and use social listening to understand customer sentiment.",
      "## Email Marketing",
      "Email remains one of the highest-ROI marketing channels. Segment your lists, personalize content, and optimize send times for maximum engagement.",
      "## Paid Advertising",
      "Combine organic and paid strategies for maximum reach. Use retargeting to capture warm leads and continuously test and optimize your campaigns.",
    ],
  },
  "6": {
    id: 6,
    title: "Supply Chain Optimization: A Complete Guide",
    category: "Business",
    author: "Muhammad Ahmad Aamir",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    authorBio: "Supply Chain Specialist at Mett Global",
    date: "Nov 8, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&h=1080&q=80",
    tags: ["Supply Chain", "Logistics", "Operations", "Efficiency"],
    content: [
      "An optimized supply chain can be your competitive advantage. Here's how to streamline operations and reduce costs while improving customer satisfaction.",
      "## Demand Forecasting",
      "Accurate demand forecasting prevents stockouts and overstock situations. Use historical data, market trends, and AI-powered tools for better predictions.",
      "## Supplier Relationships",
      "Build strong relationships with key suppliers. Consider dual-sourcing strategies to reduce risk and maintain negotiating leverage.",
      "## Inventory Management",
      "Implement just-in-time inventory where possible. Use ABC analysis to focus resources on high-value items and automate reorder points.",
      "## Technology Integration",
      "Invest in supply chain management software that provides real-time visibility. IoT sensors and blockchain technology can enhance traceability and transparency.",
      "## Continuous Improvement",
      "Regularly audit your supply chain processes. Identify bottlenecks, measure key metrics, and implement improvements iteratively.",
    ],
  },
}

export default function BlogPostPage() {
  const params = useParams()
  const postId = params.id as string
  const post = blogPosts[postId]

  if (!post) {
    return (
      <main className="relative min-h-screen overflow-hidden noise-overlay">
        <AnimatedBackground />
        <Navigation />
        <div className="container mx-auto px-6 pt-40 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const relatedPosts = Object.values(blogPosts)
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2)

  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-20"
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
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 text-sm font-mono rounded-full glass-subtle mb-6">
              {post.category}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-foreground">{post.author}</p>
                  <p className="text-sm">{post.authorBio}</p>
                </div>
              </div>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <div className="rounded-3xl overflow-hidden mb-12">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <div className="space-y-6">
                {post.content.map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-foreground mt-12 mb-4">
                        {paragraph.replace("## ", "")}
                      </h2>
                    )
                  }
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </motion.article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-sm font-semibold text-muted-foreground mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm rounded-full glass-subtle">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-sm font-semibold text-muted-foreground mb-4">Share this article</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-3 rounded-full glass-subtle hover:bg-white/10 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full glass-subtle hover:bg-white/10 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full glass-subtle hover:bg-white/10 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-gradient">Related Articles</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group block">
                  <div className="rounded-2xl overflow-hidden glass hover:glass-strong transition-all duration-500">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs text-primary">{relatedPost.category}</span>
                      <h3 className="text-lg font-bold mt-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
