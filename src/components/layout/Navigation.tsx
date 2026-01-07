"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { services, navLinks } from "@/constants/navigation"

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
          isScrolled ? "py-2" : "py-3 sm:py-4"
        )}
      >
        <div className="container mx-auto px-4">
          <nav
            className={cn(
              "flex items-center justify-between px-3 sm:px-4 py-2 rounded-xl transition-all duration-300",
              "bg-background/80 backdrop-blur-xl border border-border/40",
              "shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
              isScrolled && "bg-background/95 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            )}
          >
            {/* Logo */}
            <Link href="/" className="relative group flex items-center">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase">
                <span className="text-gradient">mett</span>
                <span className="text-foreground/80 ml-1">Global</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.hasDropdown ? (
                    <button
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className={cn(
                        "flex items-center gap-1 px-2.5 py-1.5 text-[11px] tracking-[0.08em] uppercase transition-all duration-300 rounded-lg font-medium",
                        pathname.startsWith("/services")
                          ? "text-primary"
                          : "text-foreground/70 hover:text-foreground hover:bg-white/[0.03]"
                      )}
                    >
                      {link.name}
                      <ChevronDown
                        className={cn("w-3 h-3 transition-transform duration-300", isServicesOpen && "rotate-180")}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "px-2.5 py-1.5 text-[11px] tracking-[0.08em] uppercase transition-all duration-300 rounded-lg block font-medium",
                        pathname === link.href
                          ? "text-primary"
                          : "text-foreground/70 hover:text-foreground hover:bg-white/[0.03]"
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
                          className="absolute top-full left-0 mt-2 w-52 rounded-xl p-1.5 overflow-hidden z-50 bg-background/95 backdrop-blur-2xl border border-border/40 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={() => setIsServicesOpen(false)}
                              className="flex items-center justify-between px-2.5 py-2 text-[11px] tracking-wider uppercase text-foreground/70 hover:text-foreground hover:bg-white/[0.05] rounded-lg transition-all duration-200 group/item"
                            >
                              <span>{service.name}</span>
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
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
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="group relative px-3.5 py-1.5 overflow-hidden rounded-lg glass-card hover:glow-primary transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-1.5 text-[11px] tracking-[0.08em] uppercase font-medium">
                  Start Project
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-background/60 backdrop-blur-lg border border-border/30 hover:bg-background/80 transition-all"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
              className="absolute inset-0 bg-background/90 backdrop-blur-2xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-xs glass-strong p-6 pt-20 overflow-y-auto"
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
                        "flex items-center justify-between py-2.5 text-xs tracking-wider uppercase transition-colors",
                        pathname === link.href ? "text-primary" : "text-foreground/60 hover:text-foreground"
                      )}
                    >
                      {link.name}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    {index < navLinks.length - 1 && <div className="h-px bg-border/30" />}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-2.5 px-3 text-center text-[10px] tracking-[0.1em] uppercase rounded-lg bg-primary text-primary-foreground"
                >
                  Start Project
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-border/30">
                <p className="text-[9px] tracking-wider uppercase text-muted-foreground mb-2">Get in touch</p>
                <a
                  href="mailto:hello@mettglobal.com"
                  className="text-xs text-foreground hover:text-primary transition-colors"
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
