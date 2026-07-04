import { timeline } from "@/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Timeline() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Our history"
        title="Seven years of portfolio growth"
        description="From a single flagship property to a diversified six-asset portfolio spanning business, heritage, design, boutique and nature tourism."
      />

      <div className="relative mt-14">
        <div
          aria-hidden
          className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-white/15 to-transparent sm:left-[31px]"
        />
        <ol className="flex flex-col gap-10">
          {timeline.map((event, i) => (
            <Reveal key={event.id} delay={(i % 4) * 0.06} as="li">
              <div className="flex gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-sm font-semibold text-accent-soft sm:h-16 sm:w-16">
                  {event.year}
                </div>
                <div className="pt-1">
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {event.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {event.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
