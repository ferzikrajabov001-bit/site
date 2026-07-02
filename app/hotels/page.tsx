import type { Metadata } from "next";
import { hotels } from "@/data";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { HotelsExplorer } from "@/components/HotelsExplorer";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Hotels",
  description:
    "Explore the five-property Saint Petersburg portfolio managed by HMS, spanning business, boutique, extended-stay and luxury heritage segments.",
  alternates: { canonical: "/hotels" },
};

export default function HotelsPage() {
  return (
    <>
      <PageHeader
        eyebrow="The portfolio"
        title="Hotels under management"
        description="A diversified Saint Petersburg portfolio of five properties, each operated on the HMS platform. Filter by segment to explore each asset."
      />

      <Section className="pt-0">
        <HotelsExplorer hotels={hotels} />
      </Section>

      <CTA
        title="Transfer your hotel under management"
        description="Join a portfolio built for performance. Book a consultation to discuss onboarding your property."
        primaryLabel="Transfer hotel under management"
      />
    </>
  );
}
