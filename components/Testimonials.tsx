import { testimonials, getHotelById } from "@/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <Section className="border-t border-hairline">
      <SectionHeading
        eyebrow="Отзывы владельцев"
        title="Что говорят собственники активов"
        description="Прямая обратная связь от владельцев объектов, которыми HMS управляет каждый день."
      />

      <div className="mt-14 grid gap-x-12 gap-y-10 border-t border-ink-900/10 pt-10 lg:grid-cols-2">
        {testimonials.map((item) => {
          const hotel = getHotelById(item.hotelId);
          return (
            <Reveal key={item.id}>
              <blockquote className="border-l-2 border-accent/40 pl-6">
                <p className="font-display text-xl leading-snug text-ink-900">
                  «{item.quote}»
                </p>
                <footer className="mt-4 text-sm text-muted">
                  <span className="font-medium text-ink-900">{item.author}</span>
                  {", "}
                  {item.role}
                  {hotel ? <span className="text-accent"> — {hotel.name}</span> : null}
                </footer>
              </blockquote>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
