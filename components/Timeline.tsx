import { timeline } from "@/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Timeline() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Наша история"
        title="Семь лет роста портфеля"
        description="От одного флагманского объекта до диверсифицированного портфеля из шести активов в сегментах бизнеса, наследия, дизайна, бутика и природного туризма."
      />

      <div className="relative mt-14">
        <div
          aria-hidden
          className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-hairline to-transparent sm:left-[31px]"
        />
        <ol className="flex flex-col gap-10">
          {timeline.map((event, i) => (
            <Reveal key={event.id} delay={(i % 4) * 0.06} as="li">
              <div className="flex gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-accent/25 bg-accent/[0.06] text-sm font-semibold text-accent sm:h-16 sm:w-16">
                  {event.year}
                </div>
                <div className="pt-1">
                  <h3 className="text-base font-semibold text-ink-900 sm:text-lg">
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
