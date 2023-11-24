// Recompilation count: 0
export function johnFillsAX1Foot_a8564f({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Volume of the pool in cubic feet
    const volume = x1 * x2 * x3;

    // Cost per cubic foot
    const costPerCubicFoot = 0.1;

    // Total cost to fill the pool
    const totalCost = volume * costPerCubicFoot;

    return totalCost;
}
