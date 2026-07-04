import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Services } from "@/components/Services";
import { WhyHMS } from "@/components/WhyHMS";
import { HotelsGrid } from "@/components/HotelsGrid";
import { CaseStudies } from "@/components/CaseStudies";
import { Testimonials } from "@/components/Testimonials";
import { Statement } from "@/components/Statement";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <Services />
      <Statement eyebrow="Наш принцип">
        Мы не продаём номера. Мы управляем стоимостью актива —
        и каждое операционное решение подчинено этой единственной цели.
      </Statement>
      <WhyHMS />
      <HotelsGrid limit={5} />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </>
  );
}
