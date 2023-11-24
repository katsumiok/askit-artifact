// Recompilation count: 0
export function aliceLikesToCountThe_591ad0({ x1 }: { x1: number; }): number {
  // A geometric series calculation is needed to solve this problem.
  let totalClouds = 0;
  for(let i = 0; i < 5; i++ ) {
    totalClouds += x1 * Math.pow(2, i);
  }
  return totalClouds; 
  // Alice counts 'x1' clouds on Monday, double ('x1'*2) on Tuesday, four times ('x1'*4) on Wednesday, eight times ('x1'*8) on Thursday 
  // and sixteen times ('x1'*16) on Friday. The total will be the sum of these counts.
}
