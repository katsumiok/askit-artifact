// Recompilation count: 0
export function twoGirlsEachGot_1_3c2782({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // calculate how much 2 girls have drunk
    let girlsDrink = (1 / 6) * x1 * 2;
    let totalDrink = girlsDrink + x2;
    let remainingWater = x1 - totalDrink;
    return remainingWater;
}
