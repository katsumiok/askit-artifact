// Recompilation count: 0
export function hannahNeedsToDrinkX1_756464({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
    // Calculate total calories burnt in aerobics and running
    const totalCaloriesBurnt = (x3 * x4) + (x5 * x6);

    // Calculate how much water Hannah needs to drink (ml)
    const waterNeeded = (totalCaloriesBurnt / x2) * x1;

    return waterNeeded;
}
