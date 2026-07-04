import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactForm } from "@/components/ContactForm";
import { Clock, Mail, MapPin, Phone } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Свяжитесь с Hotel Management Solutions в Санкт-Петербурге, чтобы обсудить передачу отеля в управление или запросить аудит эффективности.",
  alternates: { canonical: "/contact" },
};

const details = [
  {
    icon: Phone,
    label: "Телефон",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MapPin,
    label: "Офис",
    value: siteConfig.contact.address,
  },
  {
    icon: Clock,
    label: "Часы работы",
    value: siteConfig.contact.hours,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Контакты"
        title="Давайте обсудим ваш отель"
        description="Запишитесь на конфиденциальную консультацию, чтобы обсудить передачу актива в управление, или запросите аудит эффективности вашего объекта."
      />

      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {details.map((detail) => {
                  const Icon = detail.icon;
                  const content = (
                    <GlassCard className="h-full p-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-accent/20 bg-accent/[0.06] text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted">
                        {detail.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-ink-900">
                        {detail.value}
                      </p>
                    </GlassCard>
                  );
                  return detail.href ? (
                    <a
                      key={detail.label}
                      href={detail.href}
                      className="block transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={detail.label}>{content}</div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <GlassCard className="overflow-hidden">
                <div
                  className="relative h-56"
                  aria-label={`Место на карте — ${siteConfig.contact.city}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-ink-700 to-ink-900" />
                  <div className="absolute inset-0 bg-grid-faint [background-size:28px_28px] opacity-20" />
                  <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-soft/40 bg-accent-soft/20 text-accent-soft">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span className="rounded-full border border-white/10 bg-navy/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                      {siteConfig.contact.city}, {siteConfig.contact.country}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold text-ink-900">
                    Санкт-Петербург
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    Наша команда управляет портфелем на месте. Встречи возможны
                    в центральном офисе или удалённо.
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <GlassCard className="p-8 sm:p-10">
              <h2 className="text-xl font-semibold text-ink-900">
                Напишите нам
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Заполните форму — наша команда ответит в течение одного
                рабочего дня.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
