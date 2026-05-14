import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team | Mett Global - Meet the Experts",
  description:
    "Meet the talented team behind Mett Global. Our experts in eCommerce, development, cybersecurity, and business operations are ready to help you succeed.",
  keywords: ["team", "experts", "leadership", "digital agency team"],
  openGraph: {
    title: "Our Team | Mett Global",
    description: "Meet the talented team behind Mett Global.",
    type: "website",
  },
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
