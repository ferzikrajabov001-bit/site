import type { Hotel } from "@/data/types";

export const statusLabels: Record<Hotel["status"], string> = {
  "Under Management": "В управлении",
  Stabilized: "Стабилизирован",
  "Launch Phase": "Запуск",
};

export const statusTone: Record<Hotel["status"], "accent" | "success" | "warning"> = {
  "Under Management": "accent",
  Stabilized: "success",
  "Launch Phase": "warning",
};
