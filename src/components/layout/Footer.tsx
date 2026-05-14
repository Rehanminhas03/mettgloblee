"use client"

import Link from "next/link"
import { footerLinks, socialLinks } from "@/constants/footer"

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
            <Link href="/" className="inline-block mb-3 sm:mb-5">
              <span className="text-base sm:text-lg font-bold">
                <span className="text-gradient">mett</span>
                <span className="text-foreground/90"> Global</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-[10px] sm:text-xs leading-relaxed mb-3 sm:mb-5">
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
                  <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2 sm:mb-3">
                {category}
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[10px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors"
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
        <div className="pt-5 sm:pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
          <p className="text-[10px] sm:text-xs text-muted-foreground text-center sm:text-left">
            2025 mett Global. All rights reserved.
          </p>
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="text-[10px] sm:text-xs text-muted-foreground">Pakistan HQ</span>
            <span className="text-[10px] sm:text-xs text-primary">Serving Globally</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
