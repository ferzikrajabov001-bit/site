import { objects } from "@/data";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { TextLink } from "@/components/Button";
import { ObjectRow } from "@/components/ObjectRow";

/**
 * Объекты — список портфеля, а не карточки.
 */
export function Objects() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Объекты
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <div className="border-b border-line">
              {objects.map((object) => (
                <ObjectRow key={object.id} object={object} />
              ))}
            </div>
            <div className="mt-8">
              <Reveal>
                <TextLink href="/objects">Портфель объектов</TextLink>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
