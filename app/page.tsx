import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { IndustriesSection } from "@/components/industries-section"
import { CaseStudiesPreview } from "@/components/case-studies-preview"
import { TrustSection } from "@/components/trust-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <WhyChooseUs />
      <IndustriesSection />
      <TestimonialsSection />
      <CaseStudiesPreview />
      <Footer />
    </main>
  )
}
