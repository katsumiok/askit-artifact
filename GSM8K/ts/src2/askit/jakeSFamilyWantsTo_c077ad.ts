// Recompilation count: 0
export function jakeSFamilyWantsTo_c077ad({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Calculate cost for first amusement park
    let firstParkCost = (x1 * 26) + (x2 * 12);
    // Calculate cost for second amusement park
    let secondParkCost = (x1 * 14) + (x2 * 10);
    // Return the difference in cost
    return firstParkCost - secondParkCost;
}
