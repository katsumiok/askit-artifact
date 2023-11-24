// Recompilation count: 1
export function ifChesterEatsX1Eggs_0202a5({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
        // If Chester eats 'x1' eggs a day for 'x2' days and then increases it to 'x3' eggs a day for 'x4' days,
        // how many dozens of eggs will Chester need for 'x5' days?
        const eggsForX2Days = x1 * x2;
        const eggsForX4Days = x3 * x4;
        const totalDays = x2 + x4;

        if (x5 <= totalDays) {
            return Math.ceil((eggsForX2Days + eggsForX4Days) / 12);  // Return the number of dozens of eggs needed
        } else {
            const remainingDays = x5 - totalDays;
            const remainingEggs = x3 * remainingDays;
            return Math.ceil((eggsForX2Days + eggsForX4Days + remainingEggs) / 12);  // Return the number of dozens of eggs needed
        }
}
