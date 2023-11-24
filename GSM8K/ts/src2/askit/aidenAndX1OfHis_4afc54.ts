// Recompilation count: 0
export function aidenAndX1OfHis_4afc54({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // Initial number of people
  let people = x1 + x2 + 1; // Aiden and his friends
  // Each person saves enough room for two drinks and three snacks
  let totalDrinks = people * 2;
  let totalSnacks = people * 3;
  // Each drink and snack costs $2
  let cost = (totalDrinks + totalSnacks) * 2;
  return cost;
}
