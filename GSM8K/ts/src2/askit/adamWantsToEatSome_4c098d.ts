// Recompilation count: 0
export function adamWantsToEatSome_4c098d({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // Calculate total number of slices from large apples and small apples.
    const totalSlices = x1 * x3 + x2 * x4;

    // Then subtract the number of slices Adam ate.
    const remainingSlices = totalSlices - x5;

    // If Adam ate more than there were slices, return 0, else return the remaining number of slices.
    return remainingSlices >= 0 ? remainingSlices : 0;
}
