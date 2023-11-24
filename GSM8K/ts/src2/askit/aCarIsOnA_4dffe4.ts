// Recompilation count: 0
export function aCarIsOnA_4dffe4({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
  // A car is on a road trip and drives 'x1' mph for 'x2' hours, and then 'x3' mph for 'x4' hour. What is the car's average speed in mph during this trip?
  
  // Calculate total distance travelled
  const totalDistance = x1 * x2 + x3 * x4;
  
  // Calculate total time
  const totalTime = x2 + x4;
  
  // Calculate and return average speed
  return totalDistance / totalTime;
}
