// Recompilation count: 0
export function mishaPicksOutX1Blouses_9474fc({ x1 }: {
    x1: number;
}): number {
        // Misha picks out 'x1' blouses from the 30% off rack.  The regular price for each blouse is $20.  How much is the total cost of the discounted blouses?
        let regularPrice = 20;
        let discount = 0.3;

        let discountedPrice = regularPrice * (1 - discount);
        let totalCost = discountedPrice * x1;

        return totalCost;
    }
