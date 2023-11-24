// Recompilation count: 0
export function bradyIsCountingTheMoney_1e694e({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Brady is counting the money in his piggy bank. He has 'x1' pennies, 'x2' nickels, 'x3' dimes, and 'x4' pieces of dollar bills.
        // Calculate total in dollars
        return x1 / 100 + x2 * 0.05 + x3 * 0.10 + x4;
    }
