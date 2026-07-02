import Link from "next/link";
import { ownersStatement } from "@/data";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/icons";

/**
 * Обращение к владельцам и инвесторам. Строгое утверждение без маркетинга,
 * оформленное как разворот отчёта на тёмном фоне.
 */
export function Owners() {
  return (
    <section className="bg-graphite py-28 text-paper sm:py-36">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-paper/60">
                Владельцам и инвесторам
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal delay={0.05}>
              <p className="max-w-3xl text-balance font-serif text-3xl font-normal leading-[1.28] tracking-tight text-paper sm:text-4xl md:text-[2.9rem] md:leading-[1.24]">
                {ownersStatement}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
                <Link
                  href="/contacts"
                  className="group inline-flex items-center gap-2 text-[15px] font-medium text-paper transition-colors hover:text-white"
                >
                  Обсудить управление объектом
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contacts"
                  className="text-[15px] font-medium text-paper/70 transition-colors hover:text-paper"
                >
                  Получить оценку доходности
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
