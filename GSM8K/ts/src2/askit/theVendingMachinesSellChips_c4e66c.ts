// Recompilation count: 0
export function theVendingMachinesSellChips_c4e66c({ x1, x2, x3 }: {
  x1: number;
  x2: number;
  x3: number;
}): number {
  // George had $5 and he spent 99% of it on candies and chips
  const totalSpent = 5 * 0.99; // total spent in dollars
  const spentOnChips = x1 * x3 / 100; // spent on chips in dollars (since x1 is in cents)
  const spentOnCandies = totalSpent - spentOnChips; // spent on candies in dollars
  return Math.floor(spentOnCandies * 100 / x2); // converting the amount from dollars to cents and dividing by the cost of a candy bar to get the quantity
}
