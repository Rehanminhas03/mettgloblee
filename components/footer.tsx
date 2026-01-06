"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "eCommerce", href: "/services/ecommerce" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Cybersecurity", href: "/services/cybersecurity" },
    { name: "AI & Automation", href: "/services/ai-automation" },
    { name: "All Services", href: "/services" },
  ],
  resources: [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
]

export function Footer() {
  return (
    <footer className="relative pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 md:pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-1 mb-6 sm:mb-8 lg:mb-0">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl font-bold">
                <span className="text-gradient">mett</span>
                <span className="text-foreground/90"> Global</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Digital excellence from Pakistan to the world. Your global partner for technology and business solutions.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass-subtle hover:bg-white/10 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-3 sm:mb-4">{category}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">2025 mett Global. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-xs sm:text-sm text-muted-foreground">Pakistan HQ</span>
            <span className="text-xs sm:text-sm text-primary">Serving Globally</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
