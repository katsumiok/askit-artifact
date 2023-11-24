// Recompilation count: 0
export function aTankHasACapacity_601005({ x1 }: { x1: number; }): number {
   //calculate the water pumped by Wanda and Ms. B on the first day
   let wandaFirstDay = x1 / 4;
   let msBFirstDay = 3 / 4 * wandaFirstDay;

   //calculate the water pumped by Wanda and Ms. B on the second day
   let wandaSecondDay = 2 / 3 * wandaFirstDay;
   let msBSecondDay = 1 / 3 * msBFirstDay;

   //calculate the total water pumped
   let totalPumped = wandaFirstDay + msBFirstDay + wandaSecondDay + msBSecondDay;

   //calculate the remaining gallons
   let remainingGallons = x1 - totalPumped;

   return remainingGallons;
}
