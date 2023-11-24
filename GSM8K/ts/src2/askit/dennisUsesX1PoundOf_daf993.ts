// Recompilation count: 1
export function dennisUsesX1PoundOf_daf993({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
  // Dennis uses 'x1' pound of butter for every dozen croissants that he makes.  
  // He needs to make 'x2' dozen croissants.  
  // The grocery store currently has a promotion for buy one pound of butter get one half off.  
  // If the butter costs $4.00 a pound, how much will it cost him to purchase 'x3' pounds of butter?

  // First, calculate the total pounds of butter Dennis needs
  let butterNeeded = x1 * x2;

  // The butter is buy one get one half off, Dennis gets 2 pounds of butter for $6.
  let totalCost = (Math.floor(butterNeeded / 2) * 6) + ((butterNeeded % 2) * 4);

  // If Dennis needs to purchase extra butter (x3 is more than the number of butterNeeded)
  if (x3 > butterNeeded) {
    totalCost += (Math.floor((x3 - butterNeeded) / 2) * 6) + (((x3 - butterNeeded) % 2) * 4);
  }

  return totalCost;
}
