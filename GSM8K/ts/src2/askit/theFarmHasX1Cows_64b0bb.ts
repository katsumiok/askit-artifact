// Recompilation count: 0
export function theFarmHasX1Cows_64b0bb({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // The farm has 'x1' cows and the zoo has 'x2' sheep.
    // The zoo has twice as many cows as the farm does.
    // The farm has half as many sheep as the zoo does.
   
    let farmCows = x1;
    let zooSheep = x2;
   
    let zooCows = 2 * farmCows;
    let farmSheep = zooSheep / 2;

    // How many animals do the farm and zoo have combined?
    let totalAnimals = farmCows + farmSheep + zooCows + zooSheep;

    return totalAnimals;
}
