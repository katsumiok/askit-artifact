// Recompilation count: 0
export function markDecidesToBuyPacks_7096b8({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Calculate the total cost of the packs
    let totalCost = x1 * 1800;

    // Calculate the total value of the cards
    let totalValue = x2 * 4000 + 1000 + x3 * 50;

    // Calculate the profit
    let profit = totalValue - totalCost;

    return profit;
}
