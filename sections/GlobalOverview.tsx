import { overview } from "@/data";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { TextLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

const meta = [
  { label: "Portfolio", value: overview.portfolio },
  { label: "Location", value: overview.location },
  { label: "Status", value: overview.status, active: true },
];

/**
 * Global Overview — the entry screen of the system, not a landing hero.
 */
export function GlobalOverview() {
  return (
    <section className="pt-36 pb-16 sm:pt-44 sm:pb-20">
      <Container>
        <Reveal>
          <p className="sys-label">{siteConfig.shortName} · Asset Management System</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-8 max-w-[18ch] text-balance font-serif text-[2.5rem] font-normal leading-[1.06] tracking-tight text-graphite sm:text-5xl md:text-[3.9rem]">
            Hospitality Asset Management System
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            {siteConfig.tagline}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal delay={0.12}>
              <dl className="border-t border-line">
                {meta.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-6 border-b border-line py-4"
                  >
                    <dt className="sys-label">{row.label}</dt>
                    <dd className="flex items-center gap-2 font-mono text-[15px] text-graphite">
                      {row.active ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                      ) : null}
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pl-6">
            <Reveal delay={0.15}>
              <div className="flex flex-col gap-3">
                <Button href="/objects" variant="primary" size="lg">
                  Open Portfolio
                </Button>
                <Button href="/contacts" variant="secondary" size="lg">
                  Evaluate Asset
                </Button>
                <div className="pt-2">
                  <TextLink href="/contacts">Request Management Proposal</TextLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
