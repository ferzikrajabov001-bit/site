import Link from "next/link";
import { systemActions } from "@/data";
import { siteConfig } from "@/lib/site";
import { Layer } from "@/components/Layer";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/icons";

/**
 * Action system — not a decorative form, but a set of decisions the owner can
 * initiate. The full form lives on the contact route.
 */
export function ActionSystem() {
  return (
    <Layer index="07" label="Action System">
      <div className="border-t border-graphite/30">
        {systemActions.map((action, i) => (
          <Reveal key={action.id} delay={(i % 3) * 0.04}>
            <Link
              href="/contacts"
              className="group grid gap-1 border-b border-line py-6 transition-colors duration-200 hover:bg-graphite/[0.02] sm:grid-cols-12 sm:items-baseline sm:gap-6"
            >
              <span className="flex items-center gap-3 font-medium text-graphite transition-colors group-hover:text-accent sm:col-span-5">
                {action.label}
                <ArrowRight className="h-4 w-4 text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent" />
              </span>
              <span className="text-[15px] leading-relaxed text-muted sm:col-span-7">
                {action.note}
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-8 flex flex-col gap-1 text-[15px] text-muted sm:flex-row sm:gap-8">
          <span className="font-mono">{siteConfig.contact.city}</span>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="font-mono text-graphite transition-colors hover:text-accent"
          >
            {siteConfig.contact.email}
          </a>
        </div>
      </Reveal>
    </Layer>
  );
}
