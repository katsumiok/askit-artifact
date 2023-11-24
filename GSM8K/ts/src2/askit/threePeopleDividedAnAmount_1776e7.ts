// Recompilation count: 0
export function threePeopleDividedAnAmount_1776e7(): number {
  // Three people divided an amount of $1920. The second took $80 more than the first and the third took twice what the second took. Calculate the share of the first one.

  // We'll consider that the first person took x amount. 
  // Then the second person took x+80 amount.
  // And the third person took 2 * (x + 80) = 2x + 160
  // According the problem, their total is $1920. 
  // So, we have the equation: x + x + 80 + 2x + 160 = 1920
  // Simplifying that gives: 4x + 240 = 1920
  // Solving for x gives: x = (1920 - 240) / 4

  let firstPersonShare: number = (1920 - 240) / 4;
  return firstPersonShare;
}
