// Recompilation count: 0
export function aBirdDecidesToLeave_a19c51({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
    // Distance is speed * time. Moving north negates the distance.
    const distanceX1_X2 = x1 * x2; // distance flown south
    const distanceX3_X4 = x3 * x4; // distance flown north
    const distanceX5_X6 = x5 * x6; // distance flown south

    // Net distance is the sum of all distances minus twice the distance flown north (since it is in opposite direction to the target)
    const netDistance = distanceX1_X2 - distanceX3_X4 + distanceX5_X6;

    return netDistance;
}
