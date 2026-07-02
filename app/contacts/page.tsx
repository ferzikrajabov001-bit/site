import type { Metadata } from "next";
import { systemActions } from "@/data";
import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Action system — request an asset evaluation, submit a hotel for management, or discuss an investment model with HMS in Saint Petersburg.",
  alternates: { canonical: "/contacts" },
};

const details = [
  { label: "Location", value: siteConfig.contact.city },
  {
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`,
  },
  { label: "Hours", value: siteConfig.contact.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        index="07"
        label="Action System"
        title="Initiate a decision"
        intro="Request an evaluation, submit an asset for management, or discuss an investment model."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="border-t border-graphite/30">
                  {systemActions.map((action) => (
                    <div key={action.id} className="border-b border-line py-5">
                      <p className="font-medium text-graphite">{action.label}</p>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                        {action.note}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <dl className="mt-12">
                  {details.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex items-baseline justify-between gap-6 border-b border-line py-4 first:border-t"
                    >
                      <dt className="sys-label">{detail.label}</dt>
                      <dd className="font-mono text-[15px] text-graphite">
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
