"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight, Calendar, Clock, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const categories = ["All", "eCommerce", "Technology", "Cybersecurity", "AI", "Marketing", "Business"]

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in E-commerce: 2025 Trends",
    category: "AI",
    author: "Hammad Ayub",
    date: "Nov 20, 2025",
    readTime: "8 min read",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the e-commerce landscape and what it means for your business.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Essential Cybersecurity Practices for Small Businesses",
    category: "Cybersecurity",
    author: "Muhammad Rafey",
    date: "Nov 18, 2025",
    readTime: "6 min read",
    excerpt:
      "Protect your business from cyber threats with these essential security practices that every small business should implement.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "Amazon FBA in 2025: Complete Guide",
    category: "eCommerce",
    author: "Ali Hassan",
    date: "Nov 15, 2025",
    readTime: "12 min read",
    excerpt:
      "Everything you need to know about selling on Amazon FBA in 2025, from product selection to scaling your business.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Building Scalable Web Applications with Next.js",
    category: "Technology",
    author: "Umair Ahmed",
    date: "Nov 12, 2025",
    readTime: "10 min read",
    excerpt:
      "Learn how to build performant, scalable web applications using Next.js and modern web development practices.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: 5,
    title: "Digital Marketing Strategies That Actually Work",
    category: "Marketing",
    author: "Hammad Ayub",
    date: "Nov 10, 2025",
    readTime: "7 min read",
    excerpt:
      "Cut through the noise with proven digital marketing strategies that drive real results for your business.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: 6,
    title: "Supply Chain Optimization: A Complete Guide",
    category: "Business",
    author: "Muhammad Ahmad Aamir",
    date: "Nov 8, 2025",
    readTime: "9 min read",
    excerpt: "Optimize your supply chain operations with these proven strategies for efficiency and cost reduction.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    featured: false,
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [email, setEmail] = useState("")

  const filteredPosts =
    activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1920&h=1080&fit=crop"
            alt="Blog and content creation"
            fill
            className="object-cover opacity-15"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
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
              <span className="text-sm font-mono text-primary tracking-wider uppercase">Blog & Insights</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
              <span className="text-foreground/90">Expert insights</span>
              <br />
              <span className="text-gradient">& industry trends</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              Stay ahead with the latest insights on eCommerce, technology, cybersecurity, AI, and business growth
              strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto p-8 rounded-2xl glass-strong"
          >
            <h3 className="text-lg font-semibold mb-2 text-center">Subscribe to our newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4 text-center">
              Get the latest insights delivered to your inbox.
            </p>
            <form className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/5 border-white/10"
              />
              <Button className="bg-primary text-primary-foreground">Subscribe</Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "glass hover:glass-strong",
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
        <section className="py-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href={`/blog/${featuredPost.id}`} className="group block">
                <div className="grid lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden glass hover:glass-strong transition-all duration-500 hover:glow-primary">
                  <div className="relative h-80 lg:h-auto min-h-[300px] overflow-hidden">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-mono rounded-full bg-primary text-primary-foreground">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="text-sm text-primary font-medium mb-3">{featuredPost.category}</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground/90 mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
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
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <Link href={`/blog/${post.id}`} className="group block h-full">
                  <div className="h-full rounded-3xl overflow-hidden glass hover:glass-strong transition-all duration-500 hover:glow-primary">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-mono rounded-full glass-subtle">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground/90 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
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
            transition={{ duration: 0.8 }}
            className="text-center p-16 rounded-3xl glass-strong"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-foreground/90">Have a project</span> <span className="text-gradient">in mind?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl bg-primary text-primary-foreground hover:glow-primary transition-all duration-500"
            >
              Get in Touch
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
