// Recompilation count: 0
export function iHaveX1LitersOf_57a390({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // I have 'x1' liters of orange drink that are two-thirds water and I wish to add it to 'x2' liters of pineapple drink that is three-fifths water. But as I pour it, I spill one liter of the orange drink. How much water is in the remaining 'x3' liters?

    // Compute amount of water in orange drink
    // Note: 1 liter of orange drink is spilled
    let orangeWater = (x1 - 1) * (2 / 3);

    // Compute amount of water in pineapple drink
    let pineappleWater = x2 * (3 / 5);

    // Total amount of water in the mixture
    let totalWater = orangeWater + pineappleWater;

    // Check if 'x3' liters is more than the total mixture,
    // if yes, we return 'totalWater'
    // otherwise, we assume that water is porportionately distributed and compute accordingly
    return x3 <= (x1 - 1 + x2) ? totalWater * (x3 / (x1 - 1 + x2)) : totalWater;
}
