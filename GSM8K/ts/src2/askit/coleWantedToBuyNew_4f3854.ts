// Recompilation count: 6
export function coleWantedToBuyNew_4f3854({}: {}): number {
  let tatteredJeansSalePrice = 28;
  let totalDiscount = 6;
  let joggerJeansDiscount = totalDiscount / 3;
  let tatteredJeansDiscount = totalDiscount - joggerJeansDiscount;
  
  let tatteredJeansOriginalPrice = tatteredJeansSalePrice + tatteredJeansDiscount;
  let jeansPriceDifference = 6;
  let joggerJeansSalePrice = tatteredJeansSalePrice - jeansPriceDifference;
  
  let joggerJeansOriginalPrice = joggerJeansSalePrice + joggerJeansDiscount;
  
  return Math.abs(joggerJeansOriginalPrice - tatteredJeansOriginalPrice);
}
