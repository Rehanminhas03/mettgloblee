"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"

export default function TermsOfServicePage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-12 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-mono text-primary tracking-wider uppercase">Legal</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[0.95] mb-6">
              <span className="text-foreground/90">Terms of</span>{" "}
              <span className="text-gradient">Service</span>
            </h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl prose prose-invert prose-lg"
          >
            <div className="rounded-2xl glass p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using Mett Global's services, you agree to be bound by these Terms
                  of Service and all applicable laws and regulations. If you do not agree with any
                  of these terms, you are prohibited from using or accessing our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mett Global provides digital services including but not limited to eCommerce
                  management, web development, cybersecurity, AI automation, and business
                  consulting. The specific terms of each service engagement will be outlined in a
                  separate service agreement or statement of work.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Client Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">As a client, you agree to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Respond to requests for information in a timely manner</li>
                  <li>Make payments according to agreed terms</li>
                  <li>Not use our services for any unlawful purpose</li>
                  <li>Maintain the confidentiality of any access credentials provided</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Unless otherwise specified in writing, all deliverables created by Mett Global
                  become the property of the client upon full payment. Mett Global retains the right
                  to use anonymized versions of work for portfolio and marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Payment terms will be specified in your service agreement. Generally:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Project-based work typically requires a 50% deposit upfront</li>
                  <li>Retainer services are billed monthly in advance</li>
                  <li>Invoices are due within 14 days unless otherwise specified</li>
                  <li>Late payments may incur additional fees</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mett Global shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages resulting from your use of our services. Our
                  total liability shall not exceed the amount paid by you for the services in
                  question.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties agree to maintain the confidentiality of any proprietary or sensitive
                  information shared during the course of the engagement. This obligation survives
                  the termination of any service agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate services with 30 days written notice. In case of
                  termination, the client is responsible for payment of all work completed up to the
                  termination date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of
                  Pakistan, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-primary mt-2">legal@mettglobal.com</p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
