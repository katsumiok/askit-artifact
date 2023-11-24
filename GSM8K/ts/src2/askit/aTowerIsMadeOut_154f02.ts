// Recompilation count: 0
export function aTowerIsMadeOut_154f02({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Number of yellow blocks is twice the number of blue blocks
    const yellowBlocks = 2 * x1;

    // The total number of blue and yellow blocks
    const blueAndYellowBlocks = x1 + yellowBlocks;

    // The number of red blocks is the total blocks minus the blue and yellow blocks
    const redBlocks = x2 - blueAndYellowBlocks;

    return redBlocks;
}
