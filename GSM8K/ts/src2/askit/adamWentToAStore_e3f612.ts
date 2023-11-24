// Recompilation count: 0
export function adamWentToAStore_e3f612({ x1, x2 }: {
    x1: number;
    x2: number;
    }): number {
  // Cost of candies of type A and B
  let costOfCandiesTypeA = x1 * 0.5; // $0.5 per candy
  let costOfCandiesTypeB = x2 * 0.75; // $0.75 per candy

  // Total cost of all the candies
  let totalCost = costOfCandiesTypeA + costOfCandiesTypeB;

  // Adam paid the cashier $15, so we return the change he got
  return 15 - totalCost;
}
