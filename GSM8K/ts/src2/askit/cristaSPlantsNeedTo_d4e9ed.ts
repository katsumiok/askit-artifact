// Recompilation count: 0
export function cristaSPlantsNeedTo_d4e9ed({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
  // Calculate the number of plants that need a quarter of a cup of water
  const plantsNeedQuarterCup = x1 - x2 - x3;
  
  // Calculate total cups of water needed
  const totalCups = (x2 * 0.5) + (x3 * x4) + (plantsNeedQuarterCup * 0.25);

  return totalCups;
}
