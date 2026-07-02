import { assets } from "@/data";
import { Layer } from "@/components/Layer";
import { PortfolioTable } from "@/components/PortfolioTable";
import { TextLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function PortfolioControl() {
  return (
    <Layer index="02" label="Portfolio Control" aside={false}>
      <Reveal>
        <PortfolioTable assets={assets} />
      </Reveal>
      <div className="mt-8">
        <Reveal>
          <TextLink href="/objects">Open full portfolio</TextLink>
        </Reveal>
      </div>
    </Layer>
  );
}
