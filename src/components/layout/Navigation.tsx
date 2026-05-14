"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  { name: "Amazon & eCommerce", href: "/services/ecommerce" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Cybersecurity", href: "/services/cybersecurity" },
  { name: "B2B Lead Generation", href: "/services/lead-generation" },
  { name: "Branding & Marketing", href: "/services/branding" },
  { name: "AI & Automation", href: "/services/ai-automation" },
]

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

const WHATSAPP_NUMBER = "923005193214"
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Mett Global, I'm interested in your services."
)}`

const leadershipEmails = [
  { name: "Hammad", email: "hamadayub64@gmail.com" },
  { name: "Rehan", email: "minhasrehan96@gmail.com" },
]

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const pathname = usePathname()
  const desktopServicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isServicesOpen) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsServicesOpen(false)
    }
    function handleClickOutside(e: MouseEvent) {
      if (desktopServicesRef.current && !desktopServicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener("keydown", handleKey)
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isServicesOpen])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
    setIsMobileServicesOpen(false)
  }, [pathname])

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
                <div
                  key={link.name}
                  className="relative"
                  ref={link.hasDropdown ? desktopServicesRef : undefined}
                  onMouseEnter={link.hasDropdown ? () => setIsServicesOpen(true) : undefined}
                  onMouseLeave={link.hasDropdown ? () => setIsServicesOpen(false) : undefined}
                >
                  {link.hasDropdown ? (
                    <button
                      type="button"
                      aria-expanded={isServicesOpen}
                      aria-haspopup="menu"
                      onClick={() => setIsServicesOpen((v) => !v)}
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
                          role="menu"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 rounded-2xl p-2 overflow-hidden z-50 bg-background/95 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/20"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              role="menuitem"
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

            {/* CTA Cluster */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                title="WhatsApp us"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366]/25 transition-colors duration-200"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
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
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
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
                    {link.hasDropdown ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={isMobileServicesOpen}
                          onClick={() => setIsMobileServicesOpen((v) => !v)}
                          className={cn(
                            "flex items-center justify-between w-full py-3 text-lg font-medium transition-colors",
                            pathname.startsWith("/services")
                              ? "text-primary"
                              : "text-foreground/70 hover:text-foreground"
                          )}
                        >
                          {link.name}
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 transition-transform duration-200",
                              isMobileServicesOpen && "rotate-180"
                            )}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-1 space-y-1 border-l border-white/10 ml-1 mb-2">
                                <Link
                                  href={link.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block py-2 text-sm text-foreground/60 hover:text-primary transition-colors"
                                >
                                  All Services
                                </Link>
                                {services.map((service) => (
                                  <Link
                                    key={service.name}
                                    href={service.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                      "block py-2 text-sm transition-colors",
                                      pathname === service.href
                                        ? "text-primary"
                                        : "text-foreground/60 hover:text-foreground"
                                    )}
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
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
                    )}
                    {index < navLinks.length - 1 && <div className="h-px bg-white/5" />}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium rounded-full bg-primary text-primary-foreground"
                >
                  Start Project
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium rounded-full bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366]/25 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp Chat
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-muted-foreground mb-3">Get in touch</p>
                <div className="space-y-2">
                  {leadershipEmails.map((person) => (
                    <a
                      key={person.email}
                      href={`mailto:${person.email}`}
                      className="block text-sm text-foreground hover:text-primary transition-colors"
                    >
                      <span className="text-xs text-muted-foreground mr-2">{person.name}</span>
                      {person.email}
                    </a>
                  ))}
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
