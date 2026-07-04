import { testimonials, getHotelById } from "@/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";

export function Testimonials() {
  return (
    <Section className="relative overflow-hidden bg-paper-alt">
      <SectionHeading
        eyebrow="Отзывы владельцев"
        title="Что говорят собственники активов"
        description="Прямая обратная связь от владельцев объектов, которыми HMS управляет каждый день."
        align="center"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {testimonials.map((item, i) => {
          const hotel = getHotelById(item.hotelId);
          return (
            <Reveal key={item.id} delay={(i % 2) * 0.08} className="h-full">
              <GlassCard className="h-full p-7 sm:p-8">
                <p className="text-lg leading-relaxed text-ink-900/90">
                  «{item.quote}»
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-hairline pt-5">
                  <div>
                    <p className="text-sm font-semibold text-ink-900">
                      {item.author}
                    </p>
                    <p className="text-sm text-muted">{item.role}</p>
                  </div>
                  {hotel ? (
                    <p className="text-sm font-medium text-accent">
                      {hotel.name}
                    </p>
                  ) : null}
                </div>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
