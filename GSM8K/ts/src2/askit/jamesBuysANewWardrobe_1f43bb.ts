// Recompilation count: 0
export function jamesBuysANewWardrobe_1f43bb({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
  // Prices are determined
  const suitPrice = 750;
  const pantsPrice = suitPrice / 5;
  const shirtPrice = 60;

  // Calculate the total cost for each article of clothing
  const totalSuitCost = x1 * suitPrice;
  const totalPantsCost = x2 * pantsPrice;
  const totalShirtCost = x1 * x3 * shirtPrice;

  // Sum up total cost
  const totalCost = totalSuitCost + totalPantsCost + totalShirtCost;

  return totalCost;
}
