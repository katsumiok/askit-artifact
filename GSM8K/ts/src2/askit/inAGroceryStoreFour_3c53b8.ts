// Recompilation count: 0
export function inAGroceryStoreFour_3c53b8({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // In a grocery store, four apples cost $5.20, and three oranges cost $3.30. How much will Clyde pay for 'x1' apples and 'x2' oranges?
    const applePrice = 5.20 / 4; // price for one apple
    const orangePrice = 3.30 / 3;  // price for one orange

    return (x1 * applePrice) + (x2 * orangePrice);
}

