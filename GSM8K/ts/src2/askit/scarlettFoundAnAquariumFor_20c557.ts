// Recompilation count: 0
export function scarlettFoundAnAquariumFor_20c557({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    const aquariumCost = 10.00;
    const rocksCost = x1 * 2.50;
    const coralCost = x2 * 2.00;
    const fishCost = x3 * 0.50;
    const fishFoodCost = 2.00;

    const totalCost = aquariumCost + rocksCost + coralCost + fishCost + fishFoodCost;

    return totalCost;
}
