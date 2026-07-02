import { siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

const requests = ["управление объектом", "оценка доходности"];

/**
 * Минимальный контактный раздел: город, e-mail, запрос и простая форма.
 */
export function Contacts() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="sys-label">Контакты</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-8 font-serif text-3xl font-normal tracking-tight text-graphite">
                {siteConfig.contact.city}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-3 inline-block text-lg text-graphite underline decoration-line underline-offset-4 transition-colors hover:text-accent"
              >
                {siteConfig.contact.email}
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 sys-label">Запрос</p>
              <ul className="mt-3 space-y-1.5 text-[15px] text-muted">
                {requests.map((r) => (
                  <li key={r}>— {r}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.12}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
