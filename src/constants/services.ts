import {
  ShoppingCart,
  Code,
  Shield,
  Factory,
  Truck,
  Users,
  Palette,
  Brain,
  Headphones,
  Monitor,
  FileText,
  type LucideIcon,
} from "lucide-react"

export interface Service {
  number: string
  title: string
  description: string
  icon: LucideIcon
  href: string
  size: "large" | "medium" | "small"
  image: string
}

export const servicesData: Service[] = [
  {
    number: "01",
    title: "Amazon & eCommerce",
    description: "Multi-channel eCommerce management",
    icon: ShoppingCart,
    href: "/services/ecommerce",
    size: "large",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&q=80",
  },
  {
    number: "02",
    title: "Web Development",
    description: "Modern, scalable web applications",
    icon: Code,
    href: "/services/web-development",
    size: "medium",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&q=80",
  },
  {
    number: "03",
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions",
    icon: Shield,
    href: "/services/cybersecurity",
    size: "medium",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop&q=80",
  },
  {
    number: "04",
    title: "Procurement",
    description: "Global sourcing from Pakistan",
    icon: Factory,
    href: "/services/procurement",
    size: "small",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&q=80",
  },
  {
    number: "05",
    title: "Supply Chain",
    description: "End-to-end logistics solutions",
    icon: Truck,
    href: "/services/supply-chain",
    size: "large",
    image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?w=400&h=300&fit=crop&q=80",
  },
  {
    number: "06",
    title: "Lead Generation",
    description: "Data-driven B2B pipelines",
    icon: Users,
    href: "/services/lead-generation",
    size: "small",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&q=80",
  },
  {
    number: "07",
    title: "Branding",
    description: "Creative design & marketing",
    icon: Palette,
    href: "/services/branding",
    size: "medium",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&q=80",
  },
  {
    number: "08",
    title: "AI & Automation",
    description: "Intelligent workflows & chatbots",
    icon: Brain,
    href: "/services/ai-automation",
    size: "large",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&q=80",
  },
  {
    number: "09",
    title: "Customer Support",
    description: "24/7 multi-channel support",
    icon: Headphones,
    href: "/services/customer-support",
    size: "small",
    image: "https://images.unsplash.com/photo-1553775927-a071d5a6a39a?w=400&h=300&fit=crop&q=80",
  },
  {
    number: "10",
    title: "IT Help Desk",
    description: "Remote troubleshooting & IT",
    icon: Monitor,
    href: "/services/it-helpdesk",
    size: "medium",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop&q=80",
  },
  {
    number: "11",
    title: "Data Entry & VA",
    description: "Administrative excellence",
    icon: FileText,
    href: "/services/data-entry",
    size: "small",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&q=80",
  },
]

export const servicesList = [
  "Amazon & eCommerce",
  "Web Development",
  "Cybersecurity Services",
  "Procurement & Manufacturing",
  "Supply Chain & Logistics",
  "B2B Lead Generation",
  "Branding & Marketing",
  "AI & Automation",
  "Customer Support",
  "IT Help Desk",
  "Data Entry & VA",
] as const

export const budgetRanges = [
  "Less than $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
  "Ongoing Retainer",
] as const
