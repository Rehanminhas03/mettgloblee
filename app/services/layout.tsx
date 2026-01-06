import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | Mett Global - 11 Comprehensive Digital Solutions",
  description:
    "Explore Mett Global's 11 service lines: eCommerce, Web Development, Cybersecurity, Procurement, Supply Chain, Lead Generation, Branding, AI Automation, Customer Support, IT Help Desk, and Data Entry.",
  keywords: [
    "digital services",
    "ecommerce",
    "web development",
    "cybersecurity",
    "AI automation",
    "customer support",
    "IT services",
  ],
  openGraph: {
    title: "Our Services | Mett Global",
    description: "Comprehensive digital solutions to power your business growth.",
    type: "website",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
