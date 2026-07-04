import { services } from "@/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/icons";
import Link from "next/link";

interface ServicesProps {
  showAll?: boolean;
}

export function Services({ showAll = true }: ServicesProps) {
  const list = showAll ? services : services.slice(0, 6);

  return (
    <Section>
      <SectionHeading
        eyebrow="Чем мы занимаемся"
        title="Полная платформа управления отелем"
        description="Шесть интегрированных направлений, которые превращают гостиничные активы в стабильно прибыльный, профессионально управляемый бизнес."
      />

      <div className="mt-14 border-t border-hairline">
        {list.map((service, i) => (
          <Reveal key={service.id} delay={Math.min(i, 3) * 0.05}>
            <Link
              href={`/services#${service.slug}`}
              className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-6 border-b border-hairline py-6 transition-colors hover:bg-paper-alt sm:grid-cols-[3.5rem_1fr_1.5fr_auto] sm:items-center sm:px-4"
            >
              <span className="font-display text-sm text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold text-ink-900">
                {service.title}
              </h3>
              <p className="hidden text-sm leading-relaxed text-muted sm:block">
                {service.summary}
              </p>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
