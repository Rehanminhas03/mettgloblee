import { Linkedin, Twitter, Instagram, Facebook, type LucideIcon } from "lucide-react"

export interface FooterLink {
  name: string
  href: string
}

export interface SocialLink {
  name: string
  icon: LucideIcon
  href: string
}

export const footerLinks: Record<string, FooterLink[]> = {
  company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "eCommerce", href: "/services/ecommerce" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Cybersecurity", href: "/services/cybersecurity" },
    { name: "AI & Automation", href: "/services/ai-automation" },
  ],
  resources: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Insights", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Support", href: "/support" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
]
