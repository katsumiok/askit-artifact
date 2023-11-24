// Recompilation count: 0
export function johnDrivesForX1Hours_5f5b05({ x1, x2, x3, x4, x5, x6, x7 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
    x7: number;
}): number {

  // First, calculate the total distance John traveled before he turned around
  let totalDistanceTravelled = x1 * x2;
      
  // Calculate how much time John was actually moving after he turned around
  const movingTime = x3 - x4 - 0.5;
      
  // Calculate the distance John traveled during the time he was able to drive
  const distanceTravelledAfterTraffic = movingTime * x6;
      
  // Calculate the distance John traveled during the half hour he was driving at 30mph
  const distanceTravelledAt30Mph = 0.5 * 30;
      
  // Subtract the total distance John traveled after he turned around from the total distance he traveled 
  // before he turned around
  const distanceFromHome = totalDistanceTravelled - (distanceTravelledAfterTraffic + distanceTravelledAt30Mph);
      
  return distanceFromHome;
}
