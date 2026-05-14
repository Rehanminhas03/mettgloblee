import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | Mett Global - Our Best Work",
  description:
    "Explore our portfolio of successful projects. From eCommerce platforms to AI solutions, see how we've helped businesses achieve their digital goals.",
  keywords: ["portfolio", "projects", "work samples", "case studies", "web development", "ecommerce"],
  openGraph: {
    title: "Portfolio | Mett Global",
    description: "Explore our portfolio of successful digital projects.",
    type: "website",
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
