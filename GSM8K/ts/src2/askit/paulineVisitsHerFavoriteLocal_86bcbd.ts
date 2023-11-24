// Recompilation count: 0
export function paulineVisitsHerFavoriteLocal_86bcbd({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Pauline visits her favorite local museum three times a year. The cost of one visit is $2. After 'x1' years, the cost of one visit has increased by 150%, but Pauline decided not to give up any visit and continued to go to the museum for 'x2' more years. How much did Pauline spend on all visits to the museum?
    
    const visitsPerYear = 3;
    const initialCost = 2;
    const costIncreasePercentage = 150/100; // 150%
    const increasedCost = initialCost * (1 + costIncreasePercentage);

    let totalCost = 0;
    
    // Cost for the first 'x1' years
    totalCost += x1 * visitsPerYear * initialCost;

    // Cost for the next 'x2' years after cost has increased
    totalCost += x2 * visitsPerYear * increasedCost;

    return totalCost;
}
