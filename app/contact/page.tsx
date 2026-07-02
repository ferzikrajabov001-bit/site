import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactForm } from "@/components/ContactForm";
import { Clock, Mail, MapPin, Phone } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Hotel Management Solutions in Saint Petersburg to discuss transferring your hotel under management or requesting a performance audit.",
  alternates: { canonical: "/contact" },
};

const details = [
  {
    icon: Phone,
    label: "Phone",
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
    label: "Office",
    value: siteConfig.contact.address,
  },
  {
    icon: Clock,
    label: "Hours",
    value: siteConfig.contact.hours,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your hotel"
        description="Book a confidential consultation to discuss transferring your asset under management, or request a performance audit of your property."
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
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-accent/10 text-accent-soft">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted">
                        {detail.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
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
                  aria-label={`Map placeholder — ${siteConfig.contact.city}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-ink-700 to-ink-900" />
                  <div className="absolute inset-0 bg-grid-faint [background-size:28px_28px] opacity-50" />
                  <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-accent/20 text-accent-soft">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span className="rounded-full border border-white/10 bg-ink-900/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                      {siteConfig.contact.city}, {siteConfig.contact.country}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold text-white">
                    Saint Petersburg
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    Our team operates the portfolio locally. Meetings are
                    available at our central office or remotely.
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <GlassCard className="p-8 sm:p-10">
              <h2 className="text-xl font-semibold text-white">
                Send us a message
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Fill in the form and our team will respond within one business
                day.
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
