// Recompilation count: 0
export function jeffOwnsACateringCompany_a0037b({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Each dozen contains 12 items
    const totalGlasses = x1 * 12;
    const totalPlates = x2 * 12;

    // After the breakage
    const remainingGlasses = totalGlasses - x3;
    const remainingPlates = totalPlates - x4;

    const totalRemaining = remainingGlasses + remainingPlates;

    return totalRemaining;
}
