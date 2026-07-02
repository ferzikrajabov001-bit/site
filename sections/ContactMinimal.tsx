import { siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

/**
 * Минимальный контактный раздел на главной: город, e-mail и простая форма.
 */
export function ContactMinimal() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Контакты
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-8 font-serif text-3xl font-normal tracking-tight text-graphite">
                {siteConfig.contact.city}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-3 inline-block text-lg text-graphite underline decoration-line underline-offset-4 transition-colors hover:text-accent"
              >
                {siteConfig.contact.email}
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
