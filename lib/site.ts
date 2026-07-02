/**
 * Central system configuration: brand, contacts, navigation.
 * Single source of truth reused across every layer of the platform.
 */
export const siteConfig = {
  name: "Hotel Management Solutions",
  shortName: "HMS",
  system: "Hospitality Asset Management System",
  tagline:
    "HMS provides full operational control and performance responsibility across hospitality assets in Saint Petersburg.",
  description:
    "HMS — Hospitality Asset Management System. Full operational control, revenue management and performance responsibility across a five-asset hospitality portfolio in Saint Petersburg.",
  url: "https://hms-management.ru",
  locale: "en_US",
  contact: {
    phone: "+7 (812) 429-00-00",
    email: "office@hms-management.ru",
    address: "Bolshaya Morskaya St. 18, Saint Petersburg",
    city: "Saint Petersburg",
    country: "Russia",
    hours: "Mon–Fri, 10:00–19:00",
  },
} as const;

export const navLinks = [
  { label: "Portfolio", href: "/objects" },
  { label: "Operating Model", href: "/services" },
  { label: "Performance", href: "/cases" },
  { label: "Company", href: "/about" },
  { label: "Contact", href: "/contacts" },
] as const;
