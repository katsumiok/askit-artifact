// Recompilation count: 0
export function charlieWantsToSellBeeswax_4c74e5({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Charlie wants to sell beeswax candles. For every pound of beeswax, he can make 'x1' tapered candles. 
    // One pound of beeswax and the wicks cost $10.00 in supplies.   
    // If he sells each candle for $2.00 each, what is his net profit if he makes and sells 'x2' candles?

    let poundsOfBeeswaxNeeded = x2 / x1;
    let totalCost = poundsOfBeeswaxNeeded * 10;
    let totalRevenue = x2 * 2;
    let netProfit = totalRevenue - totalCost;
    
    return netProfit;
}
