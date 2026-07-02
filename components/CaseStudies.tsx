import { caseStudies } from "@/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ArrowRight } from "@/components/ui/icons";

interface CaseStudiesProps {
  limit?: number;
  showCta?: boolean;
}

export function CaseStudies({ limit, showCta = true }: CaseStudiesProps) {
  const list = typeof limit === "number" ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <Section className="relative overflow-hidden bg-ink-800/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <SectionHeading
        eyebrow="Proven results"
        title="Measurable performance improvements"
        description="Before-and-after outcomes across occupancy, ADR and RevPAR from properties managed under HMS."
        align="center"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {list.map((study, i) => (
          <Reveal key={study.id} delay={(i % 3) * 0.08} className="h-full">
            <CaseStudyCard study={study} />
          </Reveal>
        ))}
      </div>

      {showCta ? (
        <div className="mt-12 flex justify-center">
          <Button href="/cases" variant="secondary" size="lg">
            Explore all case studies
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      ) : null}
    </Section>
  );
}
