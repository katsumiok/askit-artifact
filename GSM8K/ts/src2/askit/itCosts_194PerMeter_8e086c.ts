// Recompilation count: 0
export function itCosts_194PerMeter_8e086c({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // It costs $194 per meter to repave a street.
    // Monica's street is 'x1' meters long.
    // How much more does it cost to repave Lewis' street, which is 'x2' meters long?

    const costPerMeter = 194;
    const costDifference = (x2 - x1) * costPerMeter;
    return Math.max(costDifference, 0);
}
