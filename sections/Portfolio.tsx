import { assets } from "@/data";
import { Layer } from "@/components/Layer";
import { Reveal } from "@/components/Reveal";
import { TextLink } from "@/components/Button";
import { ObjectRow } from "@/components/ObjectRow";

export function Portfolio() {
  return (
    <Layer label="Портфель объектов">
      <div className="border-b border-line">
        {assets.map((asset) => (
          <ObjectRow key={asset.id} asset={asset} />
        ))}
      </div>
      <div className="mt-8">
        <Reveal>
          <TextLink href="/objects">Весь портфель</TextLink>
        </Reveal>
      </div>
    </Layer>
  );
}
