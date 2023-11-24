// Recompilation count: 0
export function martyHasX1CentimeterOf_382968({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
  // Marty has 'x1' centimeters of ribbon that he must cut into 'x2' equal parts. 
  // Each of the cut parts must be divided into 'x3' equal parts. 
  // How long will each final cut be?
  
  // First, we divide the total length of the ribbon by the number of initial cuts
  let firstCutLength: number = x1 / x2;

  // Then, we divide each of these cuts by 'x3' to get the final cut length
  let finalCutLength: number = firstCutLength / x3;

  // Return the length of each final cut
  return finalCutLength;
}
