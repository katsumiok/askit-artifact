// Recompilation count: 0
export function aLargeBagOfStarbursts_b853f9({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Red candies: x2
    // Orange candies: 2 * x2
    // Yellow candies: x2 / 2
    // The total candies are x1 so pink candies would be: x1 - (Red candies + Orange candies + Yellow candies)
    return x1 - (x2 + 2 * x2 + x2 / 2);
}
