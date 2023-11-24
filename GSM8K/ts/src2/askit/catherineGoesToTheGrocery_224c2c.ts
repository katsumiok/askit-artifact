// Recompilation count: 0
export function catherineGoesToTheGrocery_224c2c({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Catherine goes to the grocery store. She buys 'x1' kilo of apples for $4, 'x2' kilos of bananas for $2 per kilo, and 'x3' kilos of oranges for $3 per kilo. How many dollars does she pay in total?
    const applePrice = 4;
    const bananaPrice = 2;
    const orangePrice = 3;

    return x1 * applePrice + x2 * bananaPrice + x3 * orangePrice;
}
