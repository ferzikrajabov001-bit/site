import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Metrics } from "@/components/Metrics";
import { CTA } from "@/components/CTA";
import { Check } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hotel Management Solutions is a full-cycle hotel management company operating a five-property portfolio in Saint Petersburg with an institutional, performance-driven approach.",
  alternates: { canonical: "/about" },
};

const philosophy = [
  {
    title: "Owner alignment",
    description:
      "Our incentives are tied to asset performance. We manage every property as if the capital were our own.",
  },
  {
    title: "Systems over heroics",
    description:
      "Repeatable operating systems — not individual improvisation — produce consistent quality and results.",
  },
  {
    title: "Data-led decisions",
    description:
      "Pricing, staffing and marketing decisions are driven by demand data and clear performance metrics.",
  },
  {
    title: "Long-term value",
    description:
      "We protect rate integrity, guest experience and brand equity to grow durable asset value.",
  },
];

const approach = [
  "Diagnostic audit of operations, revenue and financial performance",
  "Transition onto the HMS unified operating platform",
  "Revenue and distribution strategy rebuild",
  "Cost structure and staffing optimization",
  "Investor-grade reporting and ongoing performance reviews",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About HMS"
        title="A hotel management company built for asset performance"
        description="Hotel Management Solutions operates a five-property portfolio in Saint Petersburg. We pair institutional discipline with hands-on hospitality expertise to grow profitability for owners and investors."
      />

      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <GlassCard className="h-full p-8 sm:p-10">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-soft">
                Company overview
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/90">
                HMS is a full-cycle hotel management company. We take end-to-end
                responsibility for hospitality assets — operations, revenue,
                sales, marketing and financial control — on a single, transparent
                operating platform.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Owners retain full visibility and control while day-to-day
                execution is handled by an experienced management team. The result
                is predictable performance, professional standards and a clear
                path to higher profitability.
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.08}>
            <GlassCard className="h-full p-8 sm:p-10">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-soft">
                Our mission
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/90">
                To make professional hotel management accessible to owners who
                want institutional-grade performance without building an
                operating company of their own.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                We believe every well-located hospitality asset can perform
                materially better with the right operating system, revenue model
                and management team behind it.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          eyebrow="Management philosophy"
          title="Principles that guide every decision"
          description="The operating philosophy that keeps performance consistent across the portfolio."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {philosophy.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 0.08}>
              <GlassCard className="h-full p-6">
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Approach to operations"
            title="How we transform performance"
            description="A structured onboarding and management model that de-risks the transition and accelerates results."
          />
          <div className="flex flex-col gap-3">
            {approach.map((step, i) => (
              <Reveal key={step} delay={i * 0.06}>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-sm font-semibold text-accent-soft">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-white/90">
                    {step}
                  </p>
                  <Check className="ml-auto mt-1 h-5 w-5 shrink-0 text-accent-soft" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Metrics className="pt-0" />
      <CTA
        title="Let's talk about your asset"
        description="Book a confidential consultation to explore how HMS can improve your hotel's performance."
      />
    </>
  );
}
