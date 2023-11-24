// Recompilation count: 0
export function jamesIsPuttingTogetherX1_ea88f6({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Calculation to find how many screws will be james have left over
        const totalScrewsNeeded = x1 * x2 * x3;
        const leftOverScrews = x4 - totalScrewsNeeded;

        return leftOverScrews;
    }
