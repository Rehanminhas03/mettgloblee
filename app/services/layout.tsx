import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | Mett Global - Digital Solutions That Scale",
  description:
    "Mett Global's six service lines: Amazon & eCommerce, Web Development, Cybersecurity, B2B Lead Generation, Branding & Marketing, and AI & Automation.",
  keywords: [
    "digital services",
    "ecommerce",
    "web development",
    "cybersecurity",
    "AI automation",
    "lead generation",
    "branding",
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
