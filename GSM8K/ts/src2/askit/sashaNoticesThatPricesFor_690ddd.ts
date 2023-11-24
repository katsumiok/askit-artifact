// Recompilation count: 0
export function sashaNoticesThatPricesFor_690ddd({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
    // calculate profit for 'x1' x 'x2' x 'x3' boards
    const initialCostX1toX3 = 10;
    const newCostX1toX3 = initialCostX1toX3 * 1.5; // prices have gone up 50%
    const profitX1toX3 = (newCostX1toX3 - initialCostX1toX3) * 10; // she has 10 of these boards

    // calculate profit for 'x4' x 'x5' x 'x6' boards
    const initialCostX4toX6 = 16;
    const newCostX4toX6 = initialCostX4toX6 * 1.5; // prices have gone up 50%
    const profitX4toX6 = (newCostX4toX6 - initialCostX4toX6) * 5; // she has 5 of these boards

    // calculate total profit
    const totalProfit = profitX1toX3 + profitX4toX6;

    return totalProfit;
}
