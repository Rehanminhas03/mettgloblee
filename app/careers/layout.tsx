import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers | Mett Global - Join Our Global Team",
  description:
    "Join Mett Global and be part of a passionate team building innovative digital solutions for clients worldwide. View our open positions and apply today.",
  keywords: ["careers", "jobs", "hiring", "remote work", "digital agency jobs", "Pakistan tech jobs"],
  openGraph: {
    title: "Careers | Mett Global",
    description: "Join our global team and build innovative digital solutions.",
    type: "website",
  },
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
