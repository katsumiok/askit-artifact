// Recompilation count: 1
export function gingerAndAmyBothStart_704203({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
  // Define the number of days in two weeks.
  const days = 14;

  // Ginger and Amy both start with 'x1' pieces of Halloween candy.
  let gingerCandies = x1;
  let amyCandies = x1;

  // Ginger eats 'x2' pieces a day and Amy eats 'x3' pieces a day.
  // Subtract the amount of candies they eat each day for two weeks.
  gingerCandies -= x2 * days;
  amyCandies -= x3 * days;

  // Return the difference between the amount of candy Amy and Ginger have left.
  return amyCandies - gingerCandies;
}
