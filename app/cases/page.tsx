import type { Metadata } from "next";
import { caseStudies } from "@/data";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Performance",
  description:
    "Performance evidence across HMS-managed assets: before-and-after occupancy, ADR and RevPAR over the first management period.",
  alternates: { canonical: "/cases" },
};

export default function PerformancePage() {
  return (
    <>
      <PageHeader
        index="04"
        label="Performance"
        title="Evidence across managed assets"
        intro="What changes after an asset is placed under management. Business metrics over the first management period."
      />

      <section className="py-8 sm:py-12">
        <Container>
          {caseStudies.map((study) => (
            <div key={study.id} className="border-t border-line py-14 sm:py-16">
              <Reveal>
                <p className="sys-label">
                  {study.asset} · {study.district} · {study.period}
                </p>
              </Reveal>

              <div className="mt-6 grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <Reveal delay={0.05}>
                    <h2 className="max-w-md font-serif text-2xl font-normal leading-snug tracking-tight text-graphite sm:text-[1.9rem]">
                      {study.summary}
                    </h2>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
                      {study.context}
                    </p>
                  </Reveal>
                </div>

                <div className="lg:col-span-7">
                  <Reveal delay={0.08}>
                    <p className="sys-label">Actions</p>
                    <ul className="mt-4 space-y-3">
                      {study.actions.map((action, idx) => (
                        <li
                          key={action}
                          className="flex items-baseline gap-4 text-[15px] leading-relaxed text-graphite"
                        >
                          <span className="index-num">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </Reveal>

                  <Reveal delay={0.12}>
                    <div className="mt-8">
                      <BeforeAfter metrics={study.metrics} />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <CTA />
    </>
  );
}
