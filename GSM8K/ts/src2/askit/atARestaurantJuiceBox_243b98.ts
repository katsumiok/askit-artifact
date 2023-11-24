// Recompilation count: 0
export function atARestaurantJuiceBox_243b98({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // At a restaurant, Juice Box A is 'x1' dollars. Juice Box B is 'x2' dollars more than Juice Box A. Juice Box C is 'x3' dollars more than Juice Box A. How much more is Juice box C than Juice Box B?

        // First, calculate the prices for Juice Box B and Juice Box C
        let priceB = x1 + x2;  // Juice Box B's price
        let priceC = x1 + x3;  // Juice Box C's price

        // Then return the difference in price between Juice Box C and Juice Box B
        return priceC - priceB;
}
