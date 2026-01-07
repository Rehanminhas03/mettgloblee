"use client"

import Link from "next/link"
import { Navigation, Footer } from "@/components/layout"
import { AnimatedBackground } from "@/components/common"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay flex flex-col">
      <AnimatedBackground />
      <Navigation />

      <section className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Visual */}
            <div className="relative mb-8">
              <div className="text-[120px] sm:text-[180px] md:text-[220px] font-bold text-primary/10 leading-none select-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-6 rounded-full glass-strong">
                  <Search className="w-12 h-12 text-primary" />
                </div>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
              <span className="text-foreground/90">Page</span>{" "}
              <span className="text-gradient">Not Found</span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-md mx-auto">
              Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
              Let&apos;s get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 px-6 py-3 text-xs tracking-wider uppercase rounded-lg bg-primary text-primary-foreground hover:glow-primary transition-all duration-500"
              >
                <Home className="w-4 h-4" />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="group inline-flex items-center gap-2 px-6 py-3 text-xs tracking-wider uppercase rounded-lg glass hover:glass-strong transition-all duration-500"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-xs text-muted-foreground mb-4">Or try one of these pages:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: "Services", href: "/services" },
                  { name: "Case Studies", href: "/case-studies" },
                  { name: "Blog", href: "/blog" },
                  { name: "About", href: "/about" },
                  { name: "Contact", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 text-xs rounded-full glass hover:glass-strong hover:text-primary transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
