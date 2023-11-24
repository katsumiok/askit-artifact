// Recompilation count: 0
export function aSalesmanBoughtACase_26fc44({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // A salesman bought a case of 'x1' sneakers for $576. 
        // He sold 'x2' of them for $20 at a flash sale on Monday, 
        // and the rest were sold to a department store for $25 each throughout the rest of the week.
        // How much money, in dollars, was the salesman's profit?

        let initialCost = 576;
        let flashSaleRevenue = x2 * 20;
        let remainingItems = x1 - x2;
        let remainingItemsRevenue = remainingItems * 25;
        let totalRevenue = flashSaleRevenue + remainingItemsRevenue;
        let profit = totalRevenue - initialCost;

        return profit;
    }
