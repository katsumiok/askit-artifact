// Recompilation count: 0
export function marissaIsHikingA_12_21b263({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Marissa is hiking a 12-mile trail. She took 'x1' hour to walk the first 'x2' miles, then another hour to walk the next two miles. 
    // If she wants her average speed to be 'x3' miles per hour, what speed (in miles per hour) does she need to walk the remaining distance?
    
   let totalHours = (12/x3); // total hours Marissa wants to complete her hike
   let remainingDist = 12 - (x2 + 2); // remaining distance she needs to travel
   let remainingHours = totalHours - (x1 + 1); //remaining time in which she needs to cover the remaining distance
   let necessarySpeed = remainingDist/remainingHours; //speed necessary to cover the remaining distance in the remaining time

   return necessarySpeed;
}
