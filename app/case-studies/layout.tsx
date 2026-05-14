import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies | Mett Global - Success Stories",
  description:
    "Explore our client success stories. See how we've helped businesses achieve 320% revenue growth, zero security breaches, and 75% reduction in manual processes.",
  keywords: ["case studies", "success stories", "client results", "digital transformation"],
  openGraph: {
    title: "Case Studies | Mett Global",
    description: "Explore our client success stories and proven results.",
    type: "website",
  },
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
