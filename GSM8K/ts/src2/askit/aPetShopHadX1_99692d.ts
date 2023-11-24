// Recompilation count: 0
export function aPetShopHadX1_99692d({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // A pet shop had 'x1' cages of rodents. 'x2' of the cages have 'x3' hamsters and the other 'x4' have 'x5' guinea pigs. How many rodents did the pet shop have in total?
    if (x1 !== x2 + x4) throw new Error("The cages quantities do not match.");

    const totalHamsters = x2 * x3;
    const totalGuineaPigs = x4 * x5;

    return totalHamsters + totalGuineaPigs;
}
