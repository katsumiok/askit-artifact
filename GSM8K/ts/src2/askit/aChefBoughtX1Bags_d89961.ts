// Recompilation count: 0
export function aChefBoughtX1Bags_d89961({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // A chef bought 'x1' bags of onions. Each bag weighs 'x2' pounds. A pound of onions cost $1.50. How much did the chef spend?
    let totalWeight = x1 * x2; // total weight of onions that the chef bought
    let costPerPound = 1.5; // cost of a pound of onions
    return totalWeight * costPerPound; // total cost
}
