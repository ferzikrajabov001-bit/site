/**
 * Per-hotel visual identity: a themed gradient (and matching glow color)
 * used across the hotel card, hotel detail page and other surfaces so
 * each property reads consistently everywhere. Chosen to reflect each
 * asset's character rather than assigned arbitrarily:
 *  - Art Deco Nevsky        -> emerald (flagship, corporate)
 *  - Art Nouveau Palace     -> wine (heritage, Style Moderne)
 *  - Art Deco Primorsky     -> brass/gold (business, exhibition)
 *  - Petrovsky Art Loft     -> secondary/rust (industrial conversion)
 *  - Art na Repino          -> teal (seaside, Gulf of Finland)
 *  - Glampoint              -> deep forest (nature retreat)
 */
export interface HotelVisual {
  gradient: string;
  glow: string;
}

const visuals: Record<string, HotelVisual> = {
  "art-deco-nevsky": {
    gradient: "from-[#0B4530] via-[#18966D] to-[#150F0B]",
    glow: "rgba(24,150,109,0.35)",
  },
  "art-nouveau-palace": {
    gradient: "from-[#551A2C] via-[#9C2F4E] to-[#150F0B]",
    glow: "rgba(156,47,78,0.35)",
  },
  "art-deco-primorsky": {
    gradient: "from-[#96721C] via-[#DDAC3C] to-[#150F0B]",
    glow: "rgba(221,172,60,0.35)",
  },
  "petrovsky-art-loft": {
    gradient: "from-[#9C3F17] via-[#E56A32] to-[#150F0B]",
    glow: "rgba(229,106,50,0.35)",
  },
  "art-na-repino": {
    gradient: "from-[#0B4550] via-[#178497] to-[#150F0B]",
    glow: "rgba(23,132,151,0.35)",
  },
  glampoint: {
    gradient: "from-[#123D2C] via-[#2D6A4C] to-[#150F0B]",
    glow: "rgba(24,150,109,0.3)",
  },
};

const fallbackOrder = Object.values(visuals);

export function getHotelVisual(id: string, index = 0): HotelVisual {
  return visuals[id] ?? fallbackOrder[index % fallbackOrder.length];
}
