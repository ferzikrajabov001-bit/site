import { hotels } from "@/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { HotelRow } from "@/components/HotelRow";
import { ArrowRight } from "@/components/ui/icons";

interface HotelsGridProps {
  limit?: number;
  showHeading?: boolean;
  showCta?: boolean;
}

export function HotelsGrid({
  limit,
  showHeading = true,
  showCta = true,
}: HotelsGridProps) {
  const list = typeof limit === "number" ? hotels.slice(0, limit) : hotels;
  const [first, ...others] = list;

  return (
    <Section className="border-t border-hairline">
      {showHeading ? (
        <div className="grid gap-6 sm:grid-cols-[1.4fr_1fr] sm:items-end">
          <SectionHeading
            eyebrow="Портфель"
            title="Шесть объектов в управлении"
            description="Диверсифицированный портфель в Санкт-Петербурге: бизнес-отели в стиле ар-деко, историческое наследие модерна, дизайн-лофты, бутиковый отдых и глэмпинг."
          />
          {showCta ? (
            <div className="sm:justify-self-end">
              <Button href="/hotels" variant="secondary">
                Все отели
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="mt-14">
        {first ? <HotelRow hotel={first} index={0} featured /> : null}
        {others.map((hotel, i) => (
          <HotelRow key={hotel.id} hotel={hotel} index={i + 1} />
        ))}
      </div>
    </Section>
  );
}
