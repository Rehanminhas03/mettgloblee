import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Mett Global",
  description:
    "Learn how Mett Global collects, uses, and protects your personal information. Read our comprehensive privacy policy.",
  keywords: ["privacy policy", "data protection", "GDPR", "privacy"],
  openGraph: {
    title: "Privacy Policy | Mett Global",
    description: "Our commitment to protecting your privacy.",
    type: "website",
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
