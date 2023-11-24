// Recompilation count: 0
export function johnSCarBreaksDown_d4fcb3({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Calculate the total weight
    let totalWeight = x1 + x2 + 2 * x3;
    
    // Calculating the force needed which is 1% of the total weight.
    let forceNeeded = 0.01 * totalWeight;

    return forceNeeded;
}
