/**
 * Per-hotel visual identity: a themed gradient used for the photo-placeholder
 * block on the hotel card and hotel detail page. Restrained to the site's
 * institutional palette (deep green, brass, charcoal) with variation in
 * weighting per property rather than introducing extra hues.
 */
export interface HotelVisual {
  gradient: string;
}

const visuals: Record<string, HotelVisual> = {
  "art-deco-nevsky": { gradient: "from-[#0A3327] via-[#0F4D3A] to-[#15130F]" },
  "art-nouveau-palace": { gradient: "from-[#332C20] via-[#7A5A1E] to-[#15130F]" },
  "art-deco-primorsky": { gradient: "from-[#463C2A] via-[#A97F2E] to-[#15130F]" },
  "petrovsky-art-loft": { gradient: "from-[#211D16] via-[#463C2A] to-[#15130F]" },
  "art-na-repino": { gradient: "from-[#0A3327] via-[#1D7A5B] to-[#15130F]" },
  glampoint: { gradient: "from-[#15130F] via-[#0F4D3A] to-[#211D16]" },
};

const fallbackOrder = Object.values(visuals);

export function getHotelVisual(id: string, index = 0): HotelVisual {
  return visuals[id] ?? fallbackOrder[index % fallbackOrder.length];
}
