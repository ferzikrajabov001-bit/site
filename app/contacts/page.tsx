import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Свяжитесь с HMS в Санкт-Петербурге, чтобы обсудить передачу гостиницы в управление или оценку объекта.",
  alternates: { canonical: "/contacts" },
};

const phoneHref = `tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`;

const details = [
  { label: "Телефон", value: siteConfig.contact.phone, href: phoneHref },
  { label: "E-mail", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { label: "Адрес", value: siteConfig.contact.address },
  { label: "Часы работы", value: siteConfig.contact.hours },
];

export default function ContactsPage() {
  return (
    <>
      <PageHeader
        label="Контакты"
        title="Обсудить сотрудничество"
        intro="Если вы владелец гостиницы или инвестор — расскажите об объекте, и мы предложим модель управления."
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
                      className="flex items-start justify-between gap-6 border-b border-line py-5"
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
                <p className="mt-10 max-w-sm text-[15px] leading-relaxed text-muted">
                  Работаем в Санкт-Петербурге. Встречи возможны в офисе или
                  дистанционно.
                </p>
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
