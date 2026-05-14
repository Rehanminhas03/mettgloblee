"use client"

import { Navigation, Footer } from "@/components/layout"
import { AnimatedBackground } from "@/components/common"
import { BlogHero, BlogPostCard } from "@/components/pages/blog"
import { Button, Input } from "@/components/ui"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight, Calendar, Clock, User, CheckCircle } from "lucide-react"
import { toast } from "sonner"

const categories = ["All", "eCommerce", "Technology", "Cybersecurity", "AI", "Marketing", "Business"]

const blogPosts = [
  {
    id: 1,
    title: "AI Video Generation for E-commerce: The 90-Day Story Approach",
    category: "AI",
    author: "METT Global Team",
    date: "Jan 5, 2026",
    readTime: "8 min read",
    excerpt:
      "Learn how AI-generated transformation videos with storytelling approaches are revolutionizing e-commerce marketing, building trust through gradual, realistic product demonstrations.",
    image: "/blog-ai-video-ecommerce.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Creating Audiobook Covers with AI: ACX Standards Guide",
    category: "AI",
    author: "METT Global Team",
    date: "Jan 3, 2026",
    readTime: "6 min read",
    excerpt:
      "A complete guide to designing ACX-compliant audiobook covers using AI, including square format requirements, color contrast principles, and scaling design work efficiently.",
    image: "/blog-audiobook-covers.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Building Real Estate Platforms: PropertyHub Case Insights",
    category: "Technology",
    author: "METT Global Team",
    date: "Dec 28, 2025",
    readTime: "10 min read",
    excerpt:
      "Insights from building a full-stack real estate platform including property listings, advanced search, payment integration architecture, and CRM connectivity.",
    image: "/blog-real-estate-platform.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "AI Content Generation for Production Companies",
    category: "AI",
    author: "METT Global Team",
    date: "Dec 22, 2025",
    readTime: "7 min read",
    excerpt:
      "How production companies can leverage AI for content generation, maintaining quality while scaling output through automated workflows and quality checkpoints.",
    image: "/blog-ai-content-production.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Building AI-Powered Web Applications: HammerPath Lessons",
    category: "Technology",
    author: "METT Global Team",
    date: "Dec 18, 2025",
    readTime: "9 min read",
    excerpt:
      "Key lessons from developing AI video generation web applications, including user experience design, AI model integration, and building intuitive interfaces for complex technology.",
    image: "/blog-ai-web-apps.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Working with International Clients: Netherlands & Beyond",
    category: "Business",
    author: "METT Global Team",
    date: "Dec 15, 2025",
    readTime: "6 min read",
    excerpt:
      "Best practices for delivering projects to international clients, from understanding cultural nuances to communication strategies and market-specific requirements.",
    image: "/blog-international-clients.jpg",
    featured: false,
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast.error("Please enter your email address")
      return
    }

    setIsSubscribing(true)

    // Simulate API call - in production, connect to email service
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubscribing(false)
    setIsSubscribed(true)
    setEmail("")
    toast.success("Successfully subscribed!", {
      description: "You'll receive our latest insights in your inbox.",
    })
  }

  const filteredPosts =
    activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay">
      <AnimatedBackground />
      <Navigation />

      <BlogHero />

      {/* Newsletter */}
      <section className="py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto p-5 sm:p-6 rounded-xl glass-strong"
          >
            {isSubscribed ? (
              <div className="text-center py-2">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="text-sm font-semibold mb-1">You&apos;re subscribed!</h3>
                <p className="text-[11px] text-muted-foreground">
                  Thanks for joining. You&apos;ll receive our latest insights soon.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-sm sm:text-base font-semibold mb-1.5 text-center">Subscribe to our newsletter</h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground mb-3 text-center">
                  Get the latest insights delivered to your inbox.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/5 border-white/10 text-xs h-9"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={isSubscribing}
                    className="bg-primary text-primary-foreground text-xs h-9 px-4"
                  >
                    {isSubscribing ? "..." : "Subscribe"}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "glass hover:glass-strong"
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === "All" && (
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href={`/blog/${featuredPost.id}`} className="group block">
                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 rounded-xl overflow-hidden glass hover:glass-strong transition-all duration-500 hover:glow-primary">
                  <div className="relative h-48 sm:h-64 lg:h-auto overflow-hidden">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 text-[9px] font-medium rounded-full bg-primary text-primary-foreground">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
                    <span className="text-[10px] sm:text-xs text-primary font-medium mb-2">{featuredPost.category}</span>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground/90 mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <User className="w-3 h-3" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {regularPosts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center p-6 sm:p-10 md:p-12 rounded-xl sm:rounded-2xl glass-strong"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight mb-4">
              <span className="text-foreground/90">Have a project</span>{" "}
              <span className="text-gradient">in mind?</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mb-5 max-w-xl mx-auto">
              Let&apos;s discuss how we can help bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-[9px] sm:text-[10px] tracking-[0.15em] uppercase rounded-lg bg-primary text-primary-foreground hover:glow-primary transition-all duration-500"
            >
              Get in Touch
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
