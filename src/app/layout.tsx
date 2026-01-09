import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import { BackToTop } from "@/components/common"
import "@/styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "mett Global | Digital Excellence from Pakistan to the World",
  description:
    "Premium multi-service agency delivering eCommerce, Web Development, Cybersecurity, AI Automation, and Business Solutions globally from Pakistan.",
  keywords: ["agency", "ecommerce", "web development", "cybersecurity", "AI", "Pakistan", "global"],
  authors: [{ name: "mett Global" }],
  openGraph: {
    title: "mett Global | Digital Excellence from Pakistan to the World",
    description:
      "Premium multi-service agency delivering eCommerce, Web Development, Cybersecurity, AI Automation, and Business Solutions globally.",
    type: "website",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#09090B",
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
        <BackToTop />
        <Toaster
          position="top-right"
          richColors
          theme="dark"
          toastOptions={{
            style: {
              background: "rgba(5, 5, 16, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
