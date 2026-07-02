/**
 * Единая конфигурация сайта: бренд, контакты, навигация.
 */
export const siteConfig = {
  name: "Hotel Management Solutions",
  shortName: "HMS",
  tagline:
    "HMS управляет гостиничными объектами в Санкт-Петербурге и отвечает за их операционную эффективность и доходность.",
  description:
    "HMS — операционная управляющая компания гостиничного бизнеса в Санкт-Петербурге. Пять объектов под управлением: управление загрузкой и доходностью, операционный контроль, финансовая отчётность.",
  url: "https://hms-management.ru",
  locale: "ru_RU",
  contact: {
    phone: "+7 (812) 429-00-00",
    email: "office@hms-management.ru",
    address: "Санкт-Петербург, ул. Большая Морская, 18",
    city: "Санкт-Петербург",
    country: "Россия",
    hours: "Пн–Пт, 10:00–19:00",
  },
} as const;

export const navLinks = [
  { label: "О компании", href: "/about" },
  { label: "Услуги", href: "/services" },
  { label: "Портфель", href: "/objects" },
  { label: "Результаты", href: "/cases" },
  { label: "Контакты", href: "/contacts" },
] as const;
