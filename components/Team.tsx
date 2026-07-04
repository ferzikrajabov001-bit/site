import { team } from "@/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Team() {
  return (
    <Section className="border-t border-hairline">
      <SectionHeading
        eyebrow="Руководство"
        title="Команда за каждым объектом"
        description="Опытная управляющая команда с прямым track record в операциях, доходном менеджменте, продажах, маркетинге и финансах."
      />

      <div className="mt-14 grid gap-x-10 gap-y-0 border-t border-hairline sm:grid-cols-2">
        {team.map((member, i) => (
          <Reveal key={member.id} delay={Math.min(i, 3) * 0.05}>
            <div
              className={
                i % 2 === 0
                  ? "flex items-start gap-5 border-b border-hairline py-7 sm:border-r sm:pr-10"
                  : "flex items-start gap-5 border-b border-hairline py-7 sm:pl-10"
              }
            >
              <span className="font-display flex h-12 w-12 shrink-0 items-center justify-center border border-ink-900/15 text-sm font-semibold text-ink-900">
                {member.initials}
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink-900">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-accent">
                  {member.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {member.bio}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
