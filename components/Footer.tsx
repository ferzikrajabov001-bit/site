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
              Hospitality asset management system. Full operational control and
              performance responsibility across hotels in Saint Petersburg.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="mb-1 sys-label">System</p>
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
            <p className="mb-1 sys-label">Contact</p>
            <a
              href={phoneHref}
              className="font-mono text-sm text-graphite transition-colors hover:text-accent"
            >
              {siteConfig.contact.phone}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-mono text-sm text-graphite transition-colors hover:text-accent"
            >
              {siteConfig.contact.email}
            </a>
            <p className="text-sm text-muted">{siteConfig.contact.address}</p>
            <p className="text-sm text-muted">{siteConfig.contact.hours}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-8 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono">
            © {year} {siteConfig.name}
          </p>
          <p className="font-mono">Saint Petersburg · Hospitality Asset Management</p>
        </div>
      </Container>
    </footer>
  );
}
