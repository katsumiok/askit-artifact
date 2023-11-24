// Recompilation count: 0
export function johnBuysX1BottlesOf_d44fda({ x1 }: {
    x1: number;
}): number {
    // Calculate the cost of each bottle of scotch
    const costScotch = 600 / x1;

    // John buys twice as many bottles of cognac that cost 50% more per bottle
    const numCognac = x1 * 2;
    const costCognac = costScotch * 1.5;

    // Calculate the total cost for the cognac
    const totalCognac = numCognac * costCognac;

    // Calculate the total cost for both the scotch and the cognac
    const totalCost = 600 + totalCognac;

    return totalCost;
}
