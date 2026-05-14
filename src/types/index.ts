import type { LucideIcon } from "lucide-react"

// Common types
export interface BaseProps {
  className?: string
}

// Navigation types
export interface NavLinkType {
  name: string
  href: string
  hasDropdown?: boolean
}

export interface ServiceLinkType {
  name: string
  href: string
}

// Service page types
export interface ServiceFeature {
  icon: LucideIcon
  title: string
  description: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface StatItem {
  value: string
  label: string
}

// Team types
export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  social?: {
    linkedin?: string
    twitter?: string
  }
}

// Case study types
export interface CaseStudy {
  id: string
  title: string
  client: string
  category: string
  image: string
  description: string
  results: string[]
}

// Blog types
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  image: string
  slug: string
}

// Contact form types
export interface ContactFormData {
  name: string
  email: string
  company: string
  phone: string
  service: string
  budget: string
  message: string
}
