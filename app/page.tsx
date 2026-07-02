import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Services } from "@/components/Services";
import { WhyHMS } from "@/components/WhyHMS";
import { HotelsGrid } from "@/components/HotelsGrid";
import { CaseStudies } from "@/components/CaseStudies";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <Services />
      <WhyHMS />
      <HotelsGrid limit={5} />
      <CaseStudies />
      <CTA />
    </>
  );
}
