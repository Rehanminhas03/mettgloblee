"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  { name: "Amazon & eCommerce", href: "/services/ecommerce" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Cybersecurity", href: "/services/cybersecurity" },
  { name: "Procurement & Manufacturing", href: "/services/procurement" },
  { name: "Supply Chain & Logistics", href: "/services/supply-chain" },
  { name: "B2B Lead Generation", href: "/services/lead-generation" },
  { name: "Branding & Marketing", href: "/services/branding" },
  { name: "AI & Automation", href: "/services/ai-automation" },
  { name: "Customer Support", href: "/services/customer-support" },
  { name: "IT Help Desk", href: "/services/it-helpdesk" },
  { name: "Data Entry & VA", href: "/services/data-entry" },
]

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-2" : "py-4"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <nav
            className={cn(
              "flex items-center justify-between px-5 sm:px-6 py-3 rounded-full transition-all duration-300",
              "bg-background/70 backdrop-blur-xl border border-white/10",
              isScrolled && "bg-background/85 shadow-lg shadow-black/20"
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-semibold tracking-tight">
                <span className="text-gradient">Mett</span>
                <span className="text-foreground/90">Global</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <button
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className={cn(
                        "flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full",
                        pathname.startsWith("/services")
                          ? "text-primary"
                          : "text-foreground/70 hover:text-foreground hover:bg-white/5"
                      )}
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isServicesOpen && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full block",
                        pathname === link.href
                          ? "text-primary"
                          : "text-foreground/70 hover:text-foreground hover:bg-white/5"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Services Dropdown */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                          className="absolute top-full left-0 mt-2 w-64 rounded-2xl p-2 overflow-hidden z-50 bg-background/95 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/20"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={() => setIsServicesOpen(false)}
                              className="flex items-center justify-between px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-white/5 rounded-xl transition-colors duration-200 group/item"
                            >
                              <span>{service.name}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-200"
              >
                Start Project
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-white/5 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-background/95 backdrop-blur-xl border-l border-white/10 p-6 pt-24 overflow-y-auto"
            >
              <div className="space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between py-3 text-lg font-medium transition-colors",
                        pathname === link.href
                          ? "text-primary"
                          : "text-foreground/70 hover:text-foreground"
                      )}
                    >
                      {link.name}
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    {index < navLinks.length - 1 && <div className="h-px bg-white/5" />}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium rounded-full bg-primary text-primary-foreground"
                >
                  Start Project
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-muted-foreground mb-2">Get in touch</p>
                <a
                  href="mailto:hello@mettglobal.com"
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  hello@mettglobal.com
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
