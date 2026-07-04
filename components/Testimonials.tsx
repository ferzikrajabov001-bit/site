import { testimonials, getHotelById } from "@/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";

export function Testimonials() {
  return (
    <Section className="relative overflow-hidden bg-ink-800/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <SectionHeading
        eyebrow="Owner feedback"
        title="What asset owners say"
        description="Direct feedback from owners on the properties HMS manages day to day."
        align="center"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {testimonials.map((item, i) => {
          const hotel = getHotelById(item.hotelId);
          return (
            <Reveal key={item.id} delay={(i % 2) * 0.08} className="h-full">
              <GlassCard className="h-full p-7 sm:p-8">
                <p className="text-lg leading-relaxed text-white/90">
                  “{item.quote}”
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.author}
                    </p>
                    <p className="text-sm text-muted">{item.role}</p>
                  </div>
                  {hotel ? (
                    <p className="text-sm font-medium text-accent-soft">
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
