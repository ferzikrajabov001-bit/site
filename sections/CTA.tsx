import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

interface CTAProps {
  text?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export function CTA({
  text = "If you own a hospitality asset, HMS can run an operational evaluation and propose a management model.",
  buttonLabel = "Request Asset Evaluation",
  buttonHref = "/contacts",
}: CTAProps) {
  return (
    <section className="bg-graphite py-24 text-paper sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="max-w-2xl text-balance font-serif text-2xl font-normal leading-[1.3] tracking-tight text-paper sm:text-3xl md:text-[2.4rem]">
                {text}
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Reveal delay={0.08}>
              <Link
                href={buttonHref}
                className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-[15px] font-medium text-graphite transition-colors duration-300 hover:bg-white"
              >
                {buttonLabel}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
