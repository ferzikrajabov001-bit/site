import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

export function Footer() {
  const year = new Date().getFullYear();
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`;

  return (
    <footer className="border-t border-line bg-paper">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Операционная управляющая компания гостиничного бизнеса. Берём
              объекты в управление и отвечаем за их доходность.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="mb-1 sys-label">Разделы</p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-graphite"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="mb-1 sys-label">Контакты</p>
            <a
              href={phoneHref}
              className="text-sm text-graphite transition-colors hover:text-accent"
            >
              {siteConfig.contact.phone}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-sm text-graphite transition-colors hover:text-accent"
            >
              {siteConfig.contact.email}
            </a>
            <p className="text-sm text-muted">{siteConfig.contact.address}</p>
            <p className="text-sm text-muted">{siteConfig.contact.hours}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-8 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}
          </p>
          <p>Санкт-Петербург · Управление гостиничными активами</p>
        </div>
      </Container>
    </footer>
  );
}
