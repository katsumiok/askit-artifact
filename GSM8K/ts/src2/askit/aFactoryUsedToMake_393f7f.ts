// Recompilation count: 0
export function aFactoryUsedToMake_393f7f({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // A factory used to make tractors, but now makes silos. When they made tractors, they sold 'x1' tractors a day and made $100 per tractor. Now, they sell 'x2' silos a day, and make $220 per silo. What percentage more are they making per day now?
    
    const tractorRevenue = x1 * 100;
    const siloRevenue = x2 * 220;
    const difference = siloRevenue - tractorRevenue;
    const percentageIncrease = (difference / tractorRevenue) * 100;
    return percentageIncrease;
}
