import { team } from "@/data";
import type { TeamMember } from "@/data/types";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

const toneClasses: Record<TeamMember["tone"], string> = {
  accent: "border-accent/30 bg-accent/10 text-accent-soft",
  secondary: "border-secondary/30 bg-secondary/10 text-secondary-soft",
  brass: "border-brass/30 bg-brass/10 text-brass-soft",
  wine: "border-wine/30 bg-wine/10 text-wine-soft",
  teal: "border-teal/30 bg-teal/10 text-teal-soft",
};

export function Team() {
  return (
    <Section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-brass opacity-50" />
      <SectionHeading
        eyebrow="Leadership"
        title="The team behind every property"
        description="A senior management team with a direct track record across hotel operations, revenue, sales, marketing and finance."
        align="center"
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => (
          <Reveal key={member.id} delay={(i % 3) * 0.08} className="h-full">
            <GlassCard className="h-full p-7">
              <div
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-2xl border text-base font-semibold",
                  toneClasses[member.tone],
                )}
              >
                {member.initials}
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent-soft">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {member.bio}
              </p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
