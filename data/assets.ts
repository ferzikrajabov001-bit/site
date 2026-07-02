import type { Asset } from "./types";

export const assets: Asset[] = [
  {
    id: "obukhovsky",
    name: "Hotel Obukhovsky",
    location: "Saint Petersburg",
    district: "Central District",
    segment: "Business",
    rooms: 64,
    managedSince: 2019,
    status: "Stable",
    trend: "up",
    kpi: { occupancy: 81, adr: 78, revpar: 63 },
    intelligence: {
      occupancySeries: [62, 64, 68, 71, 74, 82, 88, 86, 79, 74, 70, 66],
      adrSeries: [66, 67, 69, 71, 73, 80, 86, 85, 78, 74, 71, 69],
      revenueSeries: [41, 43, 47, 50, 54, 66, 76, 73, 62, 55, 50, 46],
      seasonalRisk: "Medium",
      demandVolatility: "Low–Medium",
      notes: [
        "Corporate demand base rebuilt; direct channel restored.",
        "Rate integrity protected through segment-based pricing.",
        "Benchmark operational consistency across the portfolio.",
      ],
    },
  },
  {
    id: "nevsky-residence",
    name: "Hotel Nevsky Residence",
    location: "Saint Petersburg",
    district: "Admiralteysky District",
    segment: "Boutique",
    rooms: 38,
    managedSince: 2020,
    status: "Improving",
    trend: "up",
    kpi: { occupancy: 78, adr: 82, revpar: 64 },
    intelligence: {
      occupancySeries: [58, 60, 63, 67, 70, 79, 85, 84, 76, 71, 66, 62],
      adrSeries: [70, 71, 73, 76, 79, 86, 92, 91, 82, 77, 74, 72],
      revenueSeries: [40, 42, 46, 51, 55, 68, 78, 76, 62, 55, 49, 45],
      seasonalRisk: "Medium",
      demandVolatility: "Medium",
      notes: [
        "Repositioned toward premium leisure demand.",
        "Direct-booking programme scaling ahead of plan.",
        "ADR uplift achieved without occupancy loss.",
      ],
    },
  },
  {
    id: "petrograd-house",
    name: "Hotel Petrograd House",
    location: "Saint Petersburg",
    district: "Petrogradsky District",
    segment: "Business",
    rooms: 82,
    managedSince: 2021,
    status: "Strong",
    trend: "up",
    kpi: { occupancy: 84, adr: 91, revpar: 76 },
    intelligence: {
      occupancySeries: [64, 66, 70, 74, 78, 86, 90, 89, 82, 77, 72, 68],
      adrSeries: [78, 80, 83, 86, 88, 94, 98, 97, 91, 86, 83, 81],
      revenueSeries: [50, 53, 58, 64, 69, 81, 88, 86, 75, 66, 60, 55],
      seasonalRisk: "Medium–High",
      demandVolatility: "Medium",
      notes: [
        "Largest inventory; group and exhibition demand managed actively.",
        "Advanced channel-mix control smooths seasonal pace.",
        "Base-demand contracts reduce off-peak volatility.",
      ],
    },
  },
  {
    id: "central-loft",
    name: "Hotel Central Loft",
    location: "Saint Petersburg",
    district: "Moskovsky District",
    segment: "Business",
    rooms: 74,
    managedSince: 2023,
    status: "Stable",
    trend: "flat",
    kpi: { occupancy: 76, adr: 74, revpar: 56 },
    intelligence: {
      occupancySeries: [66, 67, 69, 72, 74, 80, 83, 82, 77, 74, 71, 69],
      adrSeries: [68, 69, 70, 72, 73, 78, 81, 80, 75, 73, 71, 70],
      revenueSeries: [45, 46, 48, 52, 54, 62, 67, 65, 58, 54, 50, 48],
      seasonalRisk: "Low–Medium",
      demandVolatility: "Low–Medium",
      notes: [
        "Transit and corporate demand near transport hubs.",
        "Operating model stabilised to plan.",
        "Cost structure aligned with occupancy profile.",
      ],
    },
  },
  {
    id: "riverside-spb",
    name: "Hotel Riverside SPB",
    location: "Saint Petersburg",
    district: "Vasileostrovsky District",
    segment: "Apartments",
    rooms: 56,
    managedSince: 2022,
    status: "Strong",
    trend: "up",
    kpi: { occupancy: 80, adr: 88, revpar: 70 },
    intelligence: {
      occupancySeries: [70, 71, 73, 75, 78, 84, 87, 86, 81, 78, 74, 72],
      adrSeries: [76, 77, 79, 82, 84, 90, 94, 93, 88, 84, 81, 79],
      revenueSeries: [53, 55, 58, 62, 66, 76, 82, 80, 71, 66, 60, 57],
      seasonalRisk: "Low–Medium",
      demandVolatility: "Low",
      notes: [
        "Extended-stay economics with long-term corporate contracts.",
        "High occupancy stability and low distribution cost.",
        "Length-of-stay mix reduces demand volatility.",
      ],
    },
  },
];

export function getAssetById(id: string): Asset | undefined {
  return assets.find((asset) => asset.id === id);
}

export function getAssetIds(): string[] {
  return assets.map((asset) => asset.id);
}
