import Link from "next/link";
import { ownersStatement } from "@/data";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/icons";

export function Owners() {
  return (
    <section className="bg-graphite py-24 text-paper sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="sys-label text-paper/60">Для владельцев объектов</p>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal delay={0.05}>
              <p className="max-w-3xl text-balance font-serif text-2xl font-normal leading-[1.32] tracking-tight text-paper sm:text-3xl md:text-[2.7rem] md:leading-[1.28]">
                {ownersStatement}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
                <Link
                  href="/contacts"
                  className="group inline-flex items-center gap-2 text-[15px] font-medium text-paper transition-colors hover:text-white"
                >
                  Обсудить объект
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
