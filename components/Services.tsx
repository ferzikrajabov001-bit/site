import { services } from "@/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { ServiceGlyph, ArrowUpRight } from "@/components/ui/icons";

interface ServicesProps {
  showAll?: boolean;
}

export function Services({ showAll = true }: ServicesProps) {
  const list = showAll ? services : services.slice(0, 6);

  return (
    <Section>
      <SectionHeading
        eyebrow="What we do"
        title="A complete hotel management platform"
        description="Six integrated disciplines that turn hospitality assets into consistently profitable, professionally operated businesses."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((service, i) => (
          <Reveal key={service.id} delay={(i % 3) * 0.08}>
            <GlassCard interactive className="group h-full p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-accent/10 text-accent-soft transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                <ServiceGlyph name={service.icon} className="h-6 w-6" />
              </div>

              <h3 className="mt-6 flex items-start justify-between gap-3 text-lg font-semibold text-white">
                {service.title}
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft group-hover:opacity-100" />
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {service.summary}
              </p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
