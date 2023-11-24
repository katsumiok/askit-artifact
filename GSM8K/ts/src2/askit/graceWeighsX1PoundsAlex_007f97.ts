// Recompilation count: 0
export function graceWeighsX1PoundsAlex_007f97({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Grace weighs 'x1' pounds. Alex weighs 'x2' pounds less than 'x3' times what Grace weighs. What are their combined weights in pounds?
    const alexWeight: number = (x3 * x1) - x2;
    const combinedWeight: number = x1 + alexWeight;
    return combinedWeight;
}
