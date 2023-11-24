// Recompilation count: 0
export function michaelIsReplacingTheCarpet_508a62({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // calculate total square feet
  const totalSquareFoot = x1 * x2;

  // calculate cost for new carpet, padding, remove the old carpet and install the new carpet
  const totalCost = (12 + 2 + 4 + 34) * totalSquareFoot;

  return totalCost;
}
