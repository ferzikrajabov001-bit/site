import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { Mail, MapPin, Phone } from "@/components/ui/icons";

const serviceLinks = [
  { label: "Операционное управление", href: "/services" },
  { label: "Доходный менеджмент", href: "/services" },
  { label: "Продажи и OTA", href: "/services" },
  { label: "Запуск отеля", href: "/services" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-navy-soft bg-navy">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-soft/50 to-transparent" />
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo className="h-9 w-9" />
              <span className="text-sm font-semibold tracking-tight text-white">
                {siteConfig.shortName}
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/55">
              {siteConfig.tagline}
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
              Компания
            </h3>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
              Услуги
            </h3>
            {serviceLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
              Контакты
            </h3>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-accent-soft" />
              {siteConfig.contact.phone}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-accent-soft" />
              {siteConfig.contact.email}
            </a>
            <p className="flex items-start gap-2.5 text-sm text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
              {siteConfig.contact.address}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-navy-soft pt-8 text-xs text-white/45 sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. Все права защищены.
          </p>
          <p className="text-white/35">
            Управление отелями · Санкт-Петербург
          </p>
        </div>
      </Container>
    </footer>
  );
}
