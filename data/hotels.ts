import type { Hotel } from "./types";

export const hotels: Hotel[] = [
  {
    id: "nevsky-grand",
    name: "Nevsky Grand",
    segment: "Upscale Business",
    category: "4★ Business",
    district: "Central District",
    location: "Saint Petersburg",
    status: "Stabilized",
    yearOnboarded: 2019,
    summary:
      "Flagship business hotel steps from Nevsky Prospekt with a strong corporate and MICE base.",
    description:
      "A 92-room upscale property in the heart of Saint Petersburg. Since transferring under HMS management the hotel has rebuilt its corporate account base and become the portfolio's benchmark for operational consistency.",
    highlights: [
      "Corporate and MICE demand engine",
      "Rebuilt direct-booking channel",
      "Benchmark operational standards",
    ],
    kpi: { occupancy: 82, rooms: 92, adr: 11800, revpar: 9676, rating: 4.7 },
    amenities: ["Conference floor", "Business lounge", "Restaurant & bar", "Fitness"],
  },
  {
    id: "moyka-boutique",
    name: "Moyka Boutique",
    segment: "Boutique Lifestyle",
    category: "4★ Boutique",
    district: "Admiralteysky",
    location: "Saint Petersburg",
    status: "Stabilized",
    yearOnboarded: 2020,
    summary:
      "Design-led boutique hotel on the Moyka embankment targeting leisure and lifestyle guests.",
    description:
      "A 48-room boutique property with a distinctive design identity. HMS repositioned the hotel toward high-value leisure demand and premium OTAs, lifting ADR while protecting its intimate service model.",
    highlights: [
      "Premium leisure positioning",
      "High ADR design product",
      "Curated guest experience",
    ],
    kpi: { occupancy: 78, rooms: 48, adr: 14200, revpar: 11076, rating: 4.8 },
    amenities: ["Rooftop terrace", "Signature cafe", "Concierge", "Spa suite"],
  },
  {
    id: "vasilievsky-park",
    name: "Vasilievsky Park",
    segment: "Upper Midscale",
    category: "4★ Business",
    district: "Vasileostrovsky",
    location: "Saint Petersburg",
    status: "Under Management",
    yearOnboarded: 2021,
    summary:
      "Large-inventory hotel serving corporate, group and exhibition demand near the expo cluster.",
    description:
      "A 120-room hotel with the portfolio's largest inventory. HMS drives a sophisticated channel and group-pricing strategy to keep occupancy high across the exhibition and corporate calendar.",
    highlights: [
      "Largest portfolio inventory",
      "Group and exhibition demand",
      "Advanced channel management",
    ],
    kpi: { occupancy: 80, rooms: 120, adr: 9600, revpar: 7680, rating: 4.5 },
    amenities: ["Meeting rooms", "All-day dining", "Parking", "Fitness"],
  },
  {
    id: "petrogradsky-suites",
    name: "Petrogradsky Suites",
    segment: "Extended Stay",
    category: "4★ Aparthotel",
    district: "Petrogradsky",
    location: "Saint Petersburg",
    status: "Stabilized",
    yearOnboarded: 2022,
    summary:
      "Aparthotel focused on extended-stay corporate and relocation guests.",
    description:
      "A 56-key aparthotel optimized for length-of-stay economics. HMS built corporate long-stay contracts that stabilize occupancy and reduce distribution cost.",
    highlights: [
      "Extended-stay economics",
      "Corporate long-stay contracts",
      "Low distribution cost",
    ],
    kpi: { occupancy: 85, rooms: 56, adr: 8900, revpar: 7565, rating: 4.6 },
    amenities: ["Full kitchens", "Laundry", "Co-working lounge", "Fitness"],
  },
  {
    id: "admiralty-collection",
    name: "Admiralty Collection",
    segment: "Luxury Heritage",
    category: "5★ Heritage",
    district: "Central District",
    location: "Saint Petersburg",
    status: "Launch Phase",
    yearOnboarded: 2024,
    summary:
      "Heritage luxury property in pre-opening ramp-up, positioned at the top of the portfolio.",
    description:
      "A 40-key heritage luxury hotel currently in launch phase. HMS is managing the full pre-opening critical path — systems, recruitment, brand and go-to-market — ahead of a premium market entry.",
    highlights: [
      "Luxury heritage positioning",
      "Full pre-opening management",
      "Premium market entry",
    ],
    kpi: { occupancy: 61, rooms: 40, adr: 24500, revpar: 14945, rating: 4.9 },
    amenities: ["Fine dining", "Spa & wellness", "Butler service", "Private events"],
  },
];

export function getHotelById(id: string): Hotel | undefined {
  return hotels.find((hotel) => hotel.id === id);
}

export function getHotelIds(): string[] {
  return hotels.map((hotel) => hotel.id);
}
