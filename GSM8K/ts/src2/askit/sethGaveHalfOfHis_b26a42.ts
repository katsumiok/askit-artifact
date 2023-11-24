// Recompilation count: 0
export function sethGaveHalfOfHis_b26a42({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // From the problem statement, we know that Kris had x1 stickers and gave x2 stickers to Rob.
  // So, Kris had x1+x2 stickers in total after receiving from Luis.
  // Luis had double of this count because he used half of the stickers.
  // Seth initially had double of Luis's count because he gave half of his stickers to Luis.
  let totalStickersKrisHad = x1 + x2;
  let totalStickersLuisHad = totalStickersKrisHad * 2;
  let totalStickersSethHad = totalStickersLuisHad * 2;
  
  return totalStickersSethHad;
}
