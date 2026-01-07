import { Navigation, Footer } from "@/components/layout"
import { AnimatedBackground } from "@/components/common"
import {
  HeroSection,
  ServicesSection,
  WhyChooseUs,
  IndustriesSection,
  CaseStudiesPreview,
  TrustSection,
  TestimonialsSection,
} from "@/components/sections"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay mesh-gradient">
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <IndustriesSection />
      <CaseStudiesPreview />
      <Footer />
    </main>
  )
}
