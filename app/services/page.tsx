import type { Metadata } from "next";
import { operatingModel } from "@/data";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Operating Model",
  description:
    "The HMS operating model: demand management, pricing control, staffing optimization, cost discipline, service standardization and financial reporting.",
  alternates: { canonical: "/services" },
};

export default function OperatingModelPage() {
  return (
    <>
      <PageHeader
        index="03"
        label="Operating Model"
        title="How the system operates an asset"
        intro="A single operating layer covering demand, pricing, staffing, cost, service and reporting."
      />

      <section className="py-8 sm:py-12">
        <Container>
          {operatingModel.map((item, i) => (
            <Reveal
              key={item.id}
              delay={(i % 3) * 0.04}
              className="grid gap-4 border-t border-line py-12 sm:py-14 lg:grid-cols-12 lg:gap-10"
            >
              <div className="lg:col-span-5">
                <div className="flex items-baseline gap-4">
                  <span className="index-num pt-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-serif text-2xl font-normal leading-tight tracking-tight text-graphite sm:text-[1.9rem]">
                    {item.term}
                  </h2>
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="max-w-2xl text-lg leading-relaxed text-muted">
                  {item.note}
                </p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <CTA />
    </>
  );
}
