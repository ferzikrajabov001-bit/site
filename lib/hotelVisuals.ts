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
  "art-deco-nevsky": { gradient: "from-[#071429] via-[#163AA8] to-[#0B1F3B]" },
  "art-nouveau-palace": { gradient: "from-[#0B1F3B] via-[#132A4D] to-[#071429]" },
  "art-deco-primorsky": { gradient: "from-[#071429] via-[#1E4ED8] to-[#0B1F3B]" },
  "petrovsky-art-loft": { gradient: "from-[#0B1F3B] via-[#28323F] to-[#071429]" },
  "art-na-repino": { gradient: "from-[#071429] via-[#60A5FA]/40 to-[#0B1F3B]" },
  glampoint: { gradient: "from-[#0B1F3B] via-[#163AA8] to-[#28323F]" },
};

const fallbackOrder = Object.values(visuals);

export function getHotelVisual(id: string, index = 0): HotelVisual {
  return visuals[id] ?? fallbackOrder[index % fallbackOrder.length];
}
