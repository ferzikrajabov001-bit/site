import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const responsibilities = [
  "Загрузка",
  "Доходность",
  "Операционная эффективность",
  "Стабильность гостевого опыта",
];

/**
 * States HMS's role explicitly: an operational layer between ownership and
 * financial performance, and the specific outcomes it is accountable for.
 */
export function Positioning() {
  return (
    <Section className="border-t border-hairline py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <Reveal>
          <p className="font-display max-w-2xl text-2xl font-medium leading-snug text-ink-900 sm:text-3xl">
            HMS выступает операционным звеном между собственником объекта
            и его финансовым результатом.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="border-t border-ink-900/10 lg:pt-0">
            <p className="pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Мы отвечаем за
            </p>
            <ul className="mt-3 divide-y divide-hairline">
              {responsibilities.map((item) => (
                <li key={item} className="py-2.5 text-sm text-ink-900">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
