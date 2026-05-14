import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Mett Global - Building Global Success From Pakistan",
  description:
    "Learn about Mett Global, a premium multi-service agency delivering world-class digital solutions. From Pakistan to the world, we serve clients globally with innovation and excellence.",
  keywords: ["about us", "digital agency", "Pakistan", "global services", "company history", "our team"],
  openGraph: {
    title: "About Us | Mett Global",
    description: "Learn about Mett Global and our mission to deliver digital excellence worldwide.",
    type: "website",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
