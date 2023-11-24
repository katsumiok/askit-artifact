// Recompilation count: 0
export function theCellPhoneRechargesAt_10296a({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
   // The cell-phone recharges at the rate of 'x1' percentage-point of charge per 'x2' minutes. Now, the phone is at 60% charged. How long will it take to fully charge, in hours?
   // We would need to recharge for 40 more percentage points to fully charge the phone. 
   // We can calculate the time it takes to recharge 1 percentage point, then multiply by 40.
   const timeToChargeOnePercentPoint = x2 / x1; // This will be the time in minutes
   const timeToFullyChargeInMinutes = timeToChargeOnePercentPoint * 40;
   // Convert the time from minutes to hours.
   const timeToFullyChargeInHours = timeToFullyChargeInMinutes / 60;
   return timeToFullyChargeInHours;
}
