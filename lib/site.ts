/**
 * Central site configuration. Kept in one place so future surfaces
 * (admin panel, client dashboard, CRM integrations) can reuse the same
 * source of truth for branding, contact details and navigation.
 */
export const siteConfig = {
  name: "Hotel Management Solutions",
  shortName: "HMS",
  tagline:
    "Full-cycle hotel management company increasing profitability and operational efficiency across hospitality assets.",
  description:
    "Hotel Management Solutions (HMS) is a full-cycle hotel management company operating 6 properties in Saint Petersburg. We deliver operations management, revenue optimization, sales, marketing and financial control for hospitality assets.",
  url: "https://hms-hospitality.com",
  locale: "en_US",
  contact: {
    phone: "+7 (812) 000-00-00",
    email: "partners@hms-hospitality.com",
    address: "Nevsky Prospekt, Saint Petersburg, 191186, Russia",
    city: "Saint Petersburg",
    country: "Russia",
    hours: "Mon–Fri, 09:00–19:00 (MSK)",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/hms-hospitality",
    telegram: "https://t.me/hms_hospitality",
  },
} as const;

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Hotels", href: "/hotels" },
  { label: "Case Studies", href: "/cases" },
  { label: "Contact", href: "/contact" },
] as const;
