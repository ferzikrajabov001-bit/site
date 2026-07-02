import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Свяжитесь с HMS в Санкт-Петербурге, чтобы обсудить управление объектом или получить оценку доходности гостиницы.",
  alternates: { canonical: "/contacts" },
};

const phoneHref = `tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`;

const details = [
  { label: "Город", value: siteConfig.contact.city },
  { label: "E-mail", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { label: "Телефон", value: siteConfig.contact.phone, href: phoneHref },
  { label: "Часы работы", value: siteConfig.contact.hours },
];

const requests = ["управление объектом", "оценка доходности"];

export default function ContactsPage() {
  return (
    <>
      <PageHeader
        label="Контакты"
        title="Обсудить объект"
        intro="Если вы владелец гостиничного объекта или инвестор — расскажите об объекте, и мы предложим формат управления."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <dl className="border-t border-line">
                  {details.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex items-baseline justify-between gap-6 border-b border-line py-5"
                    >
                      <dt className="text-sm text-muted">{detail.label}</dt>
                      <dd className="text-right text-[15px] font-medium text-graphite">
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="transition-colors hover:text-accent"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          detail.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="mt-10 sys-label">Запрос</p>
                <ul className="mt-3 space-y-1.5 text-[15px] text-muted">
                  {requests.map((r) => (
                    <li key={r}>— {r}</li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.1}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
