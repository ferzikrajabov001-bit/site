import type { Metadata } from "next";
import { caseStudies } from "@/data";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CTA } from "@/components/CTA";
import { Check } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Before-and-after results from hotels managed by HMS — measurable improvements in occupancy, ADR and RevPAR across the Saint Petersburg portfolio.",
  alternates: { canonical: "/cases" },
};

export default function CasesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Performance you can measure"
        description="Real transformations from properties managed under HMS. Each engagement pairs an operational reset with a data-led revenue strategy."
      />

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <Reveal key={study.id} delay={(i % 3) * 0.08} className="h-full">
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <Reveal key={study.id} delay={(i % 3) * 0.06} className="h-full">
              <GlassCard className="h-full p-8">
                <h2 className="text-lg font-semibold text-white">
                  {study.hotel}
                </h2>
                <p className="mt-1 text-sm text-accent-soft">{study.segment}</p>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                    Challenge
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {study.challenge}
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                    Approach
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {study.approach.map((step) => (
                      <li
                        key={step}
                        className="flex items-start gap-3 text-sm leading-relaxed text-white/90"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA
        title="Could your hotel perform like this?"
        description="Book a consultation for a confidential performance review and a clear improvement plan."
      />
    </>
  );
}
