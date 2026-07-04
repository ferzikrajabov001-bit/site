import type { Metric } from "./types";

export const metrics: Metric[] = [
  {
    id: "hotels",
    label: "Hotels under management",
    value: 6,
    description: "Full-service properties operated end-to-end in Saint Petersburg.",
  },
  {
    id: "rooms",
    label: "Rooms & units in portfolio",
    value: 350,
    suffix: "+",
    description: "Inventory optimized daily across every distribution channel.",
  },
  {
    id: "revenue",
    label: "Average revenue growth",
    value: 28,
    prefix: "+",
    suffix: "%",
    description: "Year-one uplift after transferring assets under HMS management.",
  },
  {
    id: "satisfaction",
    label: "Guest satisfaction",
    value: 94,
    suffix: "%",
    description: "Consistent quality standards across the managed portfolio.",
  },
];
