// Recompilation count: 0
export function anElectronicSellerBoughtX1_5cab98({ x1 }: { x1: number; }): number {
    // An electronics seller bought 'x1' phones for $700 each and gives the seller $4000 in dollar bills. How much will the seller give back in change?
    const totalCost = x1 * 700;
    const change = 4000 - totalCost;
    return change;
}
