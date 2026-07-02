import { hotels } from "@/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { HotelCard } from "@/components/HotelCard";
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

  return (
    <Section>
      {showHeading ? (
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="The portfolio"
            title="Five properties under management"
            description="A diversified Saint Petersburg portfolio spanning business, boutique, extended-stay and luxury heritage segments."
          />
          {showCta ? (
            <div className="shrink-0">
              <Button href="/hotels" variant="secondary">
                View all hotels
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((hotel, i) => (
          <Reveal key={hotel.id} delay={(i % 3) * 0.08} className="h-full">
            <HotelCard hotel={hotel} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
