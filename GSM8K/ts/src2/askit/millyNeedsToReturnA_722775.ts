// Recompilation count: 0
export function millyNeedsToReturnA_722775({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Milly needs to return a book she decided was really boring. 
    // The book weighs 'x1' pounds, cost $32, and needs to be returned to a distribution center 'x2' miles away. 
    // If the shipping company charges $0.35 per pound plus $0.08 per mile, 
    // and Amazon will only refund 75% of the book's purchase price, 
    // how much money will Milly lose?

    const costOfBook = 32; // book cost in dollars
    const refundRate = 0.75; // Amazon refund rate
    const shippingCostPerPound = 0.35; // shipping cost per pound in dollars
    const shippingCostPerMile = 0.08; // shipping cost per mile in dollars

    const shippingWeightCost = x1 * shippingCostPerPound;
    const shippingDistanceCost = x2 * shippingCostPerMile;

    const totalShippingCost = shippingWeightCost + shippingDistanceCost;
    const refundFromAmazon = costOfBook * refundRate;

    const totalLoss = costOfBook + totalShippingCost - refundFromAmazon;

    return totalLoss;
}
