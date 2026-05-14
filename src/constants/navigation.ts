export const services = [
  { name: "Amazon & eCommerce", href: "/services/ecommerce" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Cybersecurity", href: "/services/cybersecurity" },
  { name: "Procurement & Manufacturing", href: "/services/procurement" },
  { name: "Supply Chain & Logistics", href: "/services/supply-chain" },
  { name: "B2B Lead Generation", href: "/services/lead-generation" },
  { name: "Branding & Marketing", href: "/services/branding" },
  { name: "AI & Automation", href: "/services/ai-automation" },
  { name: "Customer Support", href: "/services/customer-support" },
  { name: "IT Help Desk", href: "/services/it-helpdesk" },
  { name: "Data Entry & VA", href: "/services/data-entry" },
] as const

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Team", href: "/team" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
] as const

export type NavLink = (typeof navLinks)[number]
export type ServiceLink = (typeof services)[number]
