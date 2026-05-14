import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mettglobal.com"

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/services",
    "/case-studies",
    "/blog",
    "/team",
    "/contact",
  ]

  // Service pages
  const servicePages = [
    "/services/ecommerce",
    "/services/web-development",
    "/services/cybersecurity",
    "/services/ai-automation",
    "/services/branding",
    "/services/customer-support",
    "/services/it-helpdesk",
    "/services/data-entry",
    "/services/procurement",
    "/services/supply-chain",
    "/services/lead-generation",
  ]

  // Blog posts (IDs 1-6)
  const blogPosts = [1, 2, 3, 4, 5, 6].map((id) => `/blog/${id}`)

  // Case studies (IDs 1-6)
  const caseStudies = [1, 2, 3, 4, 5, 6].map((id) => `/case-studies/${id}`)

  const allPages = [...staticPages, ...servicePages, ...blogPosts, ...caseStudies]

  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.9 : 0.8,
  }))
}
