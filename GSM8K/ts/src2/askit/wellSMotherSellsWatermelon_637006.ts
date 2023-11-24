// Recompilation count: 0
export function wellSMotherSellsWatermelon_637006({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
   const pepperCost = 15;
   const watermelonCost = pepperCost * 3;
   const orangeCost = watermelonCost - x1;
   const totalCost = (x2 * watermelonCost) + (x3 * pepperCost) + (x4 * orangeCost);
   
   return totalCost;
}
