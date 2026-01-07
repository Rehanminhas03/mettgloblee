"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
  image: string
}

interface BlogPostCardProps {
  post: BlogPost
  index: number
}

export function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      layout
    >
      <Link href={`/blog/${post.id}`} className="group block h-full">
        <div className="h-full rounded-xl overflow-hidden glass hover:glass-strong transition-all duration-500 hover:glow-primary">
          <div className="relative h-36 sm:h-40 overflow-hidden">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <span className="absolute top-3 left-3 px-2 py-0.5 text-[9px] font-medium rounded-full glass-subtle">
              {post.category}
            </span>
          </div>
          <div className="p-3 sm:p-4">
            <h3 className="text-sm sm:text-base font-semibold text-foreground/90 mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-[11px] sm:text-xs text-muted-foreground mb-3 line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-2.5 h-2.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-2.5 h-2.5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
