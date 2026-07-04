import type { Metric } from "./types";

export const metrics: Metric[] = [
  {
    id: "hotels",
    label: "Отелей в управлении",
    value: 6,
    description: "Полносервисные объекты под end-to-end управлением в Санкт-Петербурге.",
  },
  {
    id: "rooms",
    label: "Номеров в портфеле",
    value: 350,
    suffix: "+",
    description: "Номерной фонд, оптимизируемый ежедневно по всем каналам дистрибуции.",
  },
  {
    id: "revenue",
    label: "Средний рост выручки",
    value: 28,
    prefix: "+",
    suffix: "%",
    description: "Прирост за первый год после передачи актива в управление HMS.",
  },
  {
    id: "satisfaction",
    label: "Удовлетворённость гостей",
    value: 94,
    suffix: "%",
    description: "Стабильные стандарты качества по всему портфелю объектов.",
  },
];
