import type { Metadata } from "next";
import { services } from "@/data";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { CTA } from "@/components/CTA";
import { ServiceGlyph, Check } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-cycle hotel management services: operations management, revenue management, sales & OTA optimization, marketing strategy, financial control and hotel launch & opening.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Full-cycle hotel management, end to end"
        description="Six integrated disciplines delivered on a single operating platform — everything a hospitality asset needs to perform, from daily operations to market launch."
      />

      <Section className="pt-0">
        <div className="flex flex-col gap-6">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 2) * 0.06}>
              <GlassCard
                id={service.slug}
                className="scroll-mt-28 p-8 sm:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[auto_1fr_1fr] lg:items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-accent/10 text-accent-soft">
                    <ServiceGlyph name={service.icon} className="h-7 w-7" />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-white sm:text-2xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                      Key outcomes
                    </p>
                    <ul className="mt-4 space-y-3">
                      {service.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-3 text-sm leading-relaxed text-white/90"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA
        title="Ready to build a higher-performing hotel?"
        description="Tell us about your property and we'll recommend the right combination of services."
      />
    </>
  );
}
