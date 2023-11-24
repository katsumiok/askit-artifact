// Recompilation count: 0
export function maryIsTwoYearsYounger_1c83ef({ x1 }: {
    x1: number;
}): number {
  // Jessa's age is 'x1'
  // Joan's age is 'x1' + 5 (As Joan is five years older than Jessa)
  // Mary's age is 'x1' + 5 - 2 (As Mary is two years younger than Joan)
  // The sum of the ages of the three girls will be x1 + (x1 + 5) + (x1 + 5 - 2)
  return x1 + (x1 + 5) + (x1 + 5 - 2);
}