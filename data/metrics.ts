import type { Metric } from "./types";

export const metrics: Metric[] = [
  {
    id: "hotels",
    label: "Объектов в управлении",
    value: 6,
    description: "Полносервисные активы под end-to-end управлением в Санкт-Петербурге.",
  },
  {
    id: "rooms",
    label: "Номеров в портфеле",
    value: 350,
    suffix: "+",
    description: "Номерной фонд, оптимизируемый ежедневно по всем каналам дистрибуции.",
  },
  {
    id: "rate-growth",
    label: "Диапазон роста ADR",
    value: 0,
    display: "+18–32%",
    description: "Разброс роста тарифа по объектам за первый год под управлением HMS.",
  },
  {
    id: "oversight",
    label: "Операционный контроль",
    value: 0,
    display: "24/7",
    description: "Мониторинг эффективности портфеля и реагирование без выходных.",
  },
];
