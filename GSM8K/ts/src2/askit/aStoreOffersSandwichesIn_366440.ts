// Recompilation count: 0
export function aStoreOffersSandwichesIn_366440({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // The price per sandwich for each package
    const pricePerSandwich1 = 3 / x2;
    const pricePerSandwich2 = 6 / x3;

    // Assuming the prices are proportional, average the price per sandwich
    const averagePricePerSandwich = (pricePerSandwich1 + pricePerSandwich2) / 2;

    // Finally, multiply the average price per sandwich by the number of sandwiches in the unknown package to get its cost.
    return averagePricePerSandwich * x5;
}
