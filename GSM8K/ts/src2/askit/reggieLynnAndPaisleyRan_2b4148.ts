// Recompilation count: 0
export function reggieLynnAndPaisleyRan_2b4148({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Reggie, Lynn, and Paisley ran together. Paisley ran 'x1' miles. 
    // Reggie ran 'x2' times what Paisley ran and 'x3' miles farther than Lynn. 
    // How many miles did Lynn run?

    // Calculating how many miles Reggie ran
    let reggie = x2 * x1;

    // If Reggie ran 'x3' miles farther than Lynn, then subtract 'x3' from Reggie's miles to get Lynn's miles
    let lynn = reggie - x3;

    return lynn;
}
