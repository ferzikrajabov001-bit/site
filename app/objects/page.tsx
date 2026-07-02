import type { Metadata } from "next";
import { assets } from "@/data";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { PortfolioTable } from "@/components/PortfolioTable";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio control layer — five hospitality assets under HMS management in Saint Petersburg with occupancy, ADR, RevPAR, trend and status.",
  alternates: { canonical: "/objects" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        index="02"
        label="Portfolio Control"
        title="Assets under management"
        intro="Five hospitality assets in Saint Petersburg, operated on a single control system. Select an asset for its intelligence layer."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <PortfolioTable assets={assets} />
        </Container>
      </section>

      <CTA
        text="Transfer an asset under HMS operational control, or request an evaluation of your property."
        buttonLabel="Submit Hotel for Management"
      />
    </>
  );
}
