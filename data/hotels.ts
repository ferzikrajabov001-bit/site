import type { Hotel } from "./types";

export const hotels: Hotel[] = [
  {
    id: "art-deco-nevsky",
    name: "Art Deco Nevsky",
    segment: "Upscale Business",
    category: "4★ Business",
    district: "Central District",
    location: "Saint Petersburg",
    status: "Stabilized",
    yearOnboarded: 2019,
    summary:
      "Art Deco-styled flagship on Nevsky Prospekt anchoring the portfolio's corporate and MICE demand.",
    description:
      "A 92-room upscale property in geometric Art Deco interiors, steps from Nevsky Prospekt. Since transferring under HMS management the hotel has rebuilt its corporate account base and become the portfolio's benchmark for operational consistency.",
    highlights: [
      "Corporate and MICE demand engine",
      "Rebuilt direct-booking channel",
      "Benchmark operational standards",
    ],
    kpi: { occupancy: 82, rooms: 92, adr: 11800, revpar: 9676, rating: 4.7 },
    amenities: ["Conference floor", "Business lounge", "Restaurant & bar", "Fitness"],
  },
  {
    id: "art-nouveau-palace",
    name: "Art Nouveau Palace",
    segment: "Heritage Boutique",
    category: "5★ Heritage",
    district: "Petrogradsky",
    location: "Saint Petersburg",
    status: "Stabilized",
    yearOnboarded: 2020,
    summary:
      "A restored Style Moderne mansion on Kamennoostrovsky Prospekt — the portfolio's signature heritage address.",
    description:
      "A 34-key heritage property inside a fully restored Art Nouveau mansion, with original stained glass and wrought-iron balconies preserved throughout. HMS repositioned the hotel toward premium leisure demand, lifting direct bookings while protecting its landmark character.",
    highlights: [
      "Landmark Style Moderne architecture",
      "Direct-booking-led demand mix",
      "Signature heritage guest experience",
    ],
    kpi: { occupancy: 79, rooms: 34, adr: 16800, revpar: 13272, rating: 4.8 },
    amenities: ["Restored stained-glass hall", "Courtyard garden", "Concierge", "Fine dining"],
  },
  {
    id: "art-deco-primorsky",
    name: "Art Deco Primorsky",
    segment: "Upper Midscale",
    category: "4★ Business",
    district: "Primorsky",
    location: "Saint Petersburg",
    status: "Under Management",
    yearOnboarded: 2022,
    summary:
      "Large-inventory Art Deco property in the fast-growing Primorsky district serving corporate, group and exhibition demand.",
    description:
      "A 120-room hotel with the portfolio's largest inventory, near the Primorsky exhibition and business cluster. HMS drives a sophisticated channel and group-pricing strategy to keep occupancy high across the exhibition and corporate calendar.",
    highlights: [
      "Largest portfolio inventory",
      "Group and exhibition demand",
      "Advanced channel management",
    ],
    kpi: { occupancy: 80, rooms: 120, adr: 9600, revpar: 7680, rating: 4.5 },
    amenities: ["Meeting rooms", "All-day dining", "Parking", "Fitness"],
  },
  {
    id: "petrovsky-art-loft",
    name: "Petrovsky Art Loft",
    segment: "Design Loft",
    category: "4★ Design",
    district: "Petrogradsky Island",
    location: "Saint Petersburg",
    status: "Stabilized",
    yearOnboarded: 2021,
    summary:
      "A converted industrial building near Petrovsky Stadium with an artist-studio design identity.",
    description:
      "A 64-key loft hotel inside a repurposed factory building, with exposed brick, steel and gallery-style rooms built for creative and leisure travellers. HMS optimized content and distribution to turn its distinctive design into a strong direct and OTA visibility engine.",
    highlights: [
      "Industrial-to-hospitality conversion",
      "Strong content-led OTA visibility",
      "Event and studio-space revenue",
    ],
    kpi: { occupancy: 76, rooms: 64, adr: 9200, revpar: 6992, rating: 4.6 },
    amenities: ["Gallery lobby", "Rooftop studio", "Bike rental", "Café & bar"],
  },
  {
    id: "art-na-repino",
    name: "Art na Repino",
    segment: "Boutique Leisure",
    category: "4★ Boutique",
    district: "Kurortny",
    location: "Repino, Saint Petersburg",
    status: "Stabilized",
    yearOnboarded: 2020,
    summary:
      "A seaside art-themed boutique hotel in Repino, the historic artists' colony on the Gulf of Finland.",
    description:
      "A 48-room boutique property near Repino's artists'-colony heritage, with a gallery and residency program built into the guest experience. HMS repositioned the hotel toward premium leisure demand on the strength of its story, lifting ADR while protecting its intimate service model.",
    highlights: [
      "Artists'-colony leisure positioning",
      "Premium leisure and weekend demand",
      "Gallery and residency programming",
    ],
    kpi: { occupancy: 78, rooms: 48, adr: 14200, revpar: 11076, rating: 4.8 },
    amenities: ["Private beach access", "Art gallery & studio", "Sauna & spa", "Restaurant"],
  },
  {
    id: "glampoint",
    name: "Glampoint",
    segment: "Glamping & Nature Retreat",
    category: "Glamping",
    district: "Kurortny",
    location: "Repino, Saint Petersburg",
    status: "Launch Phase",
    yearOnboarded: 2025,
    summary:
      "A nature-immersive glamping retreat on the Gulf of Finland coast — the portfolio's newest asset class.",
    description:
      "A 22-unit glamping retreat set in pine forest along the coast, currently in launch phase. HMS is managing the full pre-opening critical path — systems, recruitment, brand and go-to-market — ahead of a premium nature-tourism entry.",
    highlights: [
      "New asset-class diversification",
      "Full pre-opening management",
      "Premium nature-tourism entry",
    ],
    kpi: { occupancy: 58, rooms: 22, adr: 15200, revpar: 8816, rating: 4.9 },
    amenities: ["Forest domes", "Outdoor sauna & hot tubs", "Campfire dining", "Private trails"],
  },
];

export function getHotelById(id: string): Hotel | undefined {
  return hotels.find((hotel) => hotel.id === id);
}

export function getHotelIds(): string[] {
  return hotels.map((hotel) => hotel.id);
}
