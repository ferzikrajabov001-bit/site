import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Metrics } from "@/components/Metrics";
import { Timeline } from "@/components/Timeline";
import { Team } from "@/components/Team";
import { Statement } from "@/components/Statement";
import { CTA } from "@/components/CTA";
import { Check } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "О компании",
  description:
    "Hotel Management Solutions — управляющая компания полного цикла с портфелем из шести объектов в Санкт-Петербурге и институциональным, ориентированным на результат подходом.",
  alternates: { canonical: "/about" },
};

const philosophy = [
  {
    title: "Совпадение интересов с владельцем",
    description:
      "Наши стимулы привязаны к показателям актива. Мы управляем каждым объектом так, будто это наш собственный капитал.",
  },
  {
    title: "Системы важнее геройства",
    description:
      "Повторяемые операционные системы — а не индивидуальная импровизация — дают стабильное качество и результат.",
  },
  {
    title: "Решения на основе данных",
    description:
      "Ценообразование, штат и маркетинг определяются данными о спросе и понятными метриками эффективности.",
  },
  {
    title: "Долгосрочная стоимость",
    description:
      "Мы защищаем целостность тарифов, гостевой опыт и капитал бренда ради устойчивого роста стоимости актива.",
  },
];

const approach = [
  "Диагностический аудит операций, доходов и финансовых показателей",
  "Переход в единую систему управления HMS",
  "Перестройка стратегии доходов и дистрибуции",
  "Оптимизация структуры затрат и штата",
  "Отчётность инвестиционного уровня и регулярные обзоры",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="О компании HMS"
        title="Управляющая компания, построенная для роста стоимости активов"
        description="Hotel Management Solutions управляет портфелем из шести объектов в Санкт-Петербурге. Мы сочетаем институциональную дисциплину с практической гостиничной экспертизой ради роста прибыльности владельцев и инвесторов."
      />

      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <GlassCard className="h-full p-8 sm:p-10">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                О компании
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-900/90">
                HMS — управляющая компания полного цикла. Мы берём на себя
                полную ответственность за гостиничные активы — операции,
                доходы, продажи, маркетинг и финансовый контроль — на единой
                прозрачной системе управления.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Владельцы сохраняют полную видимость и контроль, пока
                исполнение день в день ведёт опытная управляющая команда.
                Результат — предсказуемые показатели, профессиональные
                стандарты и понятный путь к более высокой прибыльности.
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.08}>
            <GlassCard className="h-full p-8 sm:p-10">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Наша миссия
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-900/90">
                Сделать профессиональное управление отелем доступным для
                владельцев, которые хотят институциональный уровень
                эффективности без создания собственной управляющей компании.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Мы верим, что любой хорошо расположенный гостиничный актив
                может показывать существенно более высокие результаты при
                правильной операционной системе, доходной модели и
                управляющей команде.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      <Statement eyebrow="Наш подход" align="left">
        Институциональная дисциплина существует не ради процедур —
        она существует, чтобы результат не зависел от одного человека.
      </Statement>

      <Section className="pt-0">
        <SectionHeading
          eyebrow="Управленческая философия"
          title="Принципы, которые определяют каждое решение"
          description="Операционная философия, обеспечивающая стабильность показателей по всему портфелю."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {philosophy.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 0.08}>
              <GlassCard className="h-full p-6">
                <h3 className="text-base font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Подход к операциям"
            title="Как мы трансформируем показатели"
            description="Структурированная модель онбординга и управления, снижающая риски перехода и ускоряющая результат."
          />
          <div className="flex flex-col gap-3">
            {approach.map((step, i) => (
              <Reveal key={step} delay={i * 0.06}>
                <div className="flex items-start gap-4 rounded-sm border border-hairline bg-white p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/[0.06] text-sm font-semibold text-accent">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-ink-900/90">
                    {step}
                  </p>
                  <Check className="ml-auto mt-1 h-5 w-5 shrink-0 text-accent" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Timeline />
      <Team />
      <Metrics className="pt-0" />
      <CTA
        title="Давайте обсудим ваш актив"
        description="Запишитесь на конфиденциальную консультацию, чтобы узнать, как HMS может улучшить показатели вашего отеля."
      />
    </>
  );
}
