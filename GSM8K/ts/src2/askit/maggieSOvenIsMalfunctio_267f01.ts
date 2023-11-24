// Recompilation count: 2
export function maggieSOvenIsMalfunctio_267f01({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // Maggie's oven is malfunctioning. When she sets it to 'x1' the actual temperature is 468. 
  // If it's off by the same percentage for any recipe, what temperature should she set it at if her recipe calls for 'x2' degrees?
  const ratio = 468 / x1;
  const correctTemperature = x2 / ratio;
  
  return correctTemperature;
}
