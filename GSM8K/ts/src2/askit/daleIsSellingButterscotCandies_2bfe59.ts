// Recompilation count: 0
export function daleIsSellingButterscotCandies_2bfe59({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
  
  // Dale initially ordered 'x1' candies
  // He sold 'x2' candies
  // Then he ordered 'x3' more candies
  // So, the total candies he still need to sell is the total candies he ordered minus the candies he sold
  return x1 + x3 - x2;
}
