// Recompilation count: 0
export function eachPoleOnARoad_5a67ce({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
  // Each pole on a road intersection has 'x1' street lights. 
  // If the number of poles at each intersection is 6, and the road has 'x2' intersections, 
  // calculate the total number of functioning street lights if 
  // 'x3' streetlights from the total number are not working.  
  const totalPoles = 6 * x2;
  const allLights = totalPoles * x1;
    
  const workingLights = allLights - x3;
    
  return workingLights;
}
