// Recompilation count: 0
export function marthaHasBeenCollectingShells_14b9f1({ x1 }: {
    x1: number;
}): number {
   // Assume that there are no leap years involved in this calculation
   // So, we will use a fixed 12 months per year
   let monthsPerYear = 12;
   
   // Calculate how many years from x1 until 10
   let yearsCollecting = 10 - x1;
   
   // If x1 is more than 10, then years collecting would be zero
   if(yearsCollecting < 0) {
    yearsCollecting = 0;
   }

   // Multiply the years she has been collecting by 12 to get the total months
   // The total number of months will be the total number of shells she has collected
   let totalShellsCollected = monthsPerYear * yearsCollecting;

   return totalShellsCollected;
}
