// Recompilation count: 0
export function aTankOfWaterHas_1badfa({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // A tank of water has a depth of 'x1' feet on Monday. On Tuesday, the tank had 'x2' feet more water. On Wednesday, the depth of the water is two thirds of what it was on Tuesday. What is the tank’s water depth on Wednesday?
    let tuesdayWaterDepth = x1 + x2;
    let wednesdayWaterDepth = (2/3) * tuesdayWaterDepth;
    return wednesdayWaterDepth;
}
