import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Mett Global | Digital Excellence from Pakistan to the World",
  description:
    "Premium multi-service agency delivering eCommerce, Web Development, Cybersecurity, AI Automation, and Business Solutions globally from Pakistan.",
  keywords: ["agency", "ecommerce", "web development", "cybersecurity", "AI", "Pakistan", "global"],
  authors: [{ name: "Mett Global" }],
  openGraph: {
    title: "Mett Global | Digital Excellence from Pakistan to the World",
    description:
      "Premium multi-service agency delivering eCommerce, Web Development, Cybersecurity, AI Automation, and Business Solutions globally.",
    type: "website",
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#050510",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
