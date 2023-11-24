// Recompilation count: 0
export function davidHas_12_48And_af09c2({ x1 }: {
    x1: number;
}): number {
    // David has $12.48 and wants to buy 'x1' bolts from a bin at the hardware store. Each bolt costs $0.03. How much money does David have left after paying for the bolts?
    const boltPrice = 0.03;
    let totalCost = x1 * boltPrice;
    let remainingMoney = 12.48 - totalCost;
    return remainingMoney;
}
