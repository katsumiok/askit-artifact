// Recompilation count: 0
export function aThreeOunceBoxOf_2e1690({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {

  // Total number of jello cups we need
  let totalJelloCupsNeeded = x2 * x3;

  // Boxes of Jello we need
  let boxesNeeded = Math.ceil(totalJelloCupsNeeded / x1);
  
  // cost of the Jello we need
  let totalCost = boxesNeeded * 1.25;

  return totalCost;
}
