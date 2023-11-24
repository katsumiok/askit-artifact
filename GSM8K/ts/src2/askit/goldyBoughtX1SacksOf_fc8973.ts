// Recompilation count: 0
export function goldyBoughtX1SacksOf_fc8973({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Goldy bought 'x1' sacks of rice and gave 'x2' sacks to her cousin and 'x3' sacks to her brother, if there are 'x4' kilograms of rice per sack, how many kilograms does she gave to her cousin and brother?
    const riceGivenToCousin = x2 * x4;
    const riceGivenToBrother = x3 * x4;
    const totalRiceGiven = riceGivenToCousin + riceGivenToBrother;
    return totalRiceGiven;
}
