import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Mett Global - Get in Touch",
  description:
    "Ready to transform your business? Contact Mett Global for a free consultation. We're available 24/7 to discuss your project.",
  keywords: ["contact", "get in touch", "free consultation", "project inquiry"],
  openGraph: {
    title: "Contact Us | Mett Global",
    description: "Get in touch with our team for a free consultation.",
    type: "website",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
