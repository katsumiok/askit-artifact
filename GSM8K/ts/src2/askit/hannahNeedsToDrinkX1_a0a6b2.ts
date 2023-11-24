// Recompilation count: 0
export function hannahNeedsToDrinkX1_a0a6b2({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // Hannah needs to drink 'x1' ml of water for each kilometer she runs.
  // If her gym teacher tells her to run 'x2' laps and each lap is 0.25 km,
  // how many milliliters of water will Hannah need to drink?

  const totalKilometers = x2 * 0.25;
  const totalWater = totalKilometers * x1;

  return totalWater;
}
