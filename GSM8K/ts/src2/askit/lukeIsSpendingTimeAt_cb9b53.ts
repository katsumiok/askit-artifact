// Recompilation count: 3
export function lukeIsSpendingTimeAt_cb9b53({ x1 }: {
    x1: number;
}): number {
        // Assume the square footage of the topmost level is 16
        let topLevelSquareFootage: number = 16;
        // Total square footage for all levels
        let totalSquareFootage: number = 0;

        // Since each subsequent level has twice the footage of the previous one, calculate total footage
        for(let i = 0; i < x1; i++) {
            totalSquareFootage += topLevelSquareFootage * Math.pow(2, i);
        }

        // Average square footage is the total footage divided by the number of levels
        return (totalSquareFootage / x1);
    }
