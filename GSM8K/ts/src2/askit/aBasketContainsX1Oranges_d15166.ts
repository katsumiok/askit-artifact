// Recompilation count: 0
export function aBasketContainsX1Oranges_d15166({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // A basket contains 'x1' oranges among which 'x2' is bad, 20% are unripe, 'x3' are sour and the rest are good. How many oranges are good?

    // Calculate the number of unripe oranges
    const unripeOranges = x1 * 0.2;

    // Subtract bad, unripe and sour oranges from the total to find the good ones
    const goodOranges = x1 - x2 - unripeOranges - x3;

    // Return the number of good oranges
    return goodOranges;
}
