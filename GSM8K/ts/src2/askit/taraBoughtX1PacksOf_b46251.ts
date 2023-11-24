// Recompilation count: 0
export function taraBoughtX1PacksOf_b46251({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Tara bought 'x1' packs of 'x2' canvas bags for $4 each. 
    // She painted them and sold them at a craft fair for $8 each. 
    // We need to calculate how much profit did she earn on her bags?
    const totalCost = x1 * x2 * 4; // Number of packs times items in each pack times cost per item
    const totalSales = x1 * x2 * 8; // Number of packs times items in each pack times selling price per item
    return totalSales - totalCost; // Subtract cost from sales to calculate profit
}
