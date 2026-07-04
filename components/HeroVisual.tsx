"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TrendUp } from "@/components/ui/icons";

const bars = [42, 58, 51, 69, 63, 82, 88];
const channels = [
  { label: "Прямые", value: 38, tone: "bg-accent" },
  { label: "OTA", value: 34, tone: "bg-brass" },
  { label: "Корпоративные", value: 28, tone: "bg-ink-600" },
];

/**
 * Abstract "portfolio performance" card used as the hero visual. Pure
 * CSS/SVG with a subtle Framer Motion entrance — no external assets.
 */
export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-3xl border border-hairline bg-white p-5 shadow-card"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted">
              RevPAR портфеля
            </p>
            <p className="mt-1 text-2xl font-semibold text-ink-900">₽ 9 318</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-700/20 bg-emerald-700/[0.06] px-2.5 py-1 text-xs font-medium text-emerald-800">
            <TrendUp className="h-3.5 w-3.5" />
            +28%
          </span>
        </div>

        {/* Bar chart */}
        <div className="mt-6 flex h-32 items-end gap-2.5">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-md bg-gradient-to-t from-accent/40 to-accent"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.3 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ))}
        </div>

        {/* Channel mix */}
        <div className="mt-6 space-y-3">
          {channels.map((c, i) => (
            <div key={c.label} className="flex items-center gap-3">
              <span className="w-24 text-xs text-muted">{c.label}</span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-paper-alt">
                <motion.div
                  className={`h-full rounded-full ${c.tone}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${c.value}%` }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.8,
                    delay: reduceMotion ? 0 : 0.6 + i * 0.12,
                  }}
                />
              </div>
              <span className="w-9 text-right text-xs font-medium text-ink-900">
                {c.value}%
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating KPI card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-hairline bg-white p-4 shadow-card sm:block"
      >
        <p className="text-xs text-muted">Загрузка</p>
        <p className="mt-0.5 text-xl font-semibold text-ink-900">81,4%</p>
        <div className="mt-2 h-1.5 w-28 overflow-hidden rounded-full bg-paper-alt">
          <div className="h-full w-[81%] rounded-full bg-accent" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65 }}
        className="absolute -right-4 -top-6 hidden rounded-2xl border border-hairline bg-white p-4 shadow-card sm:block"
      >
        <p className="text-xs text-muted">Удовлетворённость гостей</p>
        <p className="mt-0.5 text-xl font-semibold text-ink-900">94%</p>
      </motion.div>
    </div>
  );
}
