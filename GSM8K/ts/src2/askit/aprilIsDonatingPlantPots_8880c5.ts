// Recompilation count: 0
export function aprilIsDonatingPlantPots_8880c5({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // April is donating plant pots to a local school for their new garden. They ask for 'x1' plant pots for the daisies, and twice as many for the roses. April had already bought 'x2' plant pots from the garden center before she knew how many she needed. How many plant pots does April have left over?
    const totalNeeded = x1 + (2 * x1);
    const leftOver = x2 - totalNeeded;
    return leftOver;
}
