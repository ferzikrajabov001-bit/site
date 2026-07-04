/**
 * Per-hotel visual identity: a themed gradient used for the photo-placeholder
 * plate on the hotel row and hotel detail page. Restrained to the site's
 * investment-blue palette (deep navy, capital blue) with variation in
 * weighting per property rather than introducing extra hues.
 */
export interface HotelVisual {
  gradient: string;
}

const visuals: Record<string, HotelVisual> = {
  "art-deco-nevsky": { gradient: "from-[#060F1E] via-[#153DAD] to-[#0A1B33]" },
  "art-nouveau-palace": { gradient: "from-[#0A1B33] via-[#122A4A] to-[#060F1E]" },
  "art-deco-primorsky": { gradient: "from-[#060F1E] via-[#1D4ED8] to-[#0A1B33]" },
  "petrovsky-art-loft": { gradient: "from-[#0A1B33] via-[#1E293B] to-[#060F1E]" },
  "art-na-repino": { gradient: "from-[#060F1E] via-[#60A5FA]/40 to-[#0A1B33]" },
  glampoint: { gradient: "from-[#0A1B33] via-[#153DAD] to-[#1E293B]" },
};

const fallbackOrder = Object.values(visuals);

export function getHotelVisual(id: string, index = 0): HotelVisual {
  return visuals[id] ?? fallbackOrder[index % fallbackOrder.length];
}
