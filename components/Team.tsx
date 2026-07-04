import { team } from "@/data";
import type { TeamMember } from "@/data/types";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

const toneClasses: Record<TeamMember["tone"], string> = {
  accent: "border-accent/25 bg-accent/[0.06] text-accent",
  brass: "border-brass/30 bg-brass/[0.08] text-brass-deep",
  ink: "border-ink-900/15 bg-ink-900/[0.04] text-ink-900",
};

export function Team() {
  return (
    <Section className="relative overflow-hidden bg-paper-alt">
      <SectionHeading
        eyebrow="Руководство"
        title="Команда за каждым объектом"
        description="Опытная управляющая команда с прямым track record в операциях, доходном менеджменте, продажах, маркетинге и финансах."
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
              <h3 className="mt-5 text-base font-semibold text-ink-900">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
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
