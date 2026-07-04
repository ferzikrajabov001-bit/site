/**
 * Central site configuration. Kept in one place so future surfaces
 * (admin panel, client dashboard, CRM integrations) can reuse the same
 * source of truth for branding, contact details and navigation.
 */
export const siteConfig = {
  name: "Hotel Management Solutions",
  shortName: "HMS",
  tagline:
    "Управляющая компания гостиничных активов полного цикла — рост прибыльности и операционной эффективности объектов размещения.",
  description:
    "Hotel Management Solutions (HMS) — управляющая компания полного цикла, в портфеле которой 6 объектов в Санкт-Петербурге. Операционное управление, доходный менеджмент, продажи, маркетинг и финансовый контроль для гостиничных активов.",
  url: "https://hms-hospitality.com",
  locale: "ru_RU",
  contact: {
    phone: "+7 (812) 000-00-00",
    email: "partners@hms-hospitality.com",
    address: "Невский проспект, Санкт-Петербург, 191186",
    city: "Санкт-Петербург",
    country: "Россия",
    hours: "Пн–Пт, 09:00–19:00 (МСК)",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/hms-hospitality",
    telegram: "https://t.me/hms_hospitality",
  },
} as const;

export const navLinks = [
  { label: "О компании", href: "/about" },
  { label: "Услуги", href: "/services" },
  { label: "Отели", href: "/hotels" },
  { label: "Результаты", href: "/cases" },
  { label: "Контакты", href: "/contact" },
] as const;
