import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Mett Global",
  description:
    "Read the terms and conditions that govern your use of Mett Global's services and website.",
  keywords: ["terms of service", "terms and conditions", "legal", "agreement"],
  openGraph: {
    title: "Terms of Service | Mett Global",
    description: "Terms and conditions for using our services.",
    type: "website",
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
