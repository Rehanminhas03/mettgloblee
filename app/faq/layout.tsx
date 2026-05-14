import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | Mett Global - Frequently Asked Questions",
  description:
    "Find answers to common questions about Mett Global's services, pricing, process, and how we can help your business grow.",
  keywords: ["FAQ", "frequently asked questions", "help", "support", "questions"],
  openGraph: {
    title: "FAQ | Mett Global",
    description: "Find answers to common questions about our services.",
    type: "website",
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
