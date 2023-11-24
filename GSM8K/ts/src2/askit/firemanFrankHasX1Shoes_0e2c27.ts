// Recompilation count: 0
export function firemanFrankHasX1Shoes_0e2c27({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // Fireman Frank has 'x1' shoes. If he gets 'x2' pairs of shoes on Monday and gains 'x3' new pairs on Wednesday and 'x4' pairs on Friday, how many shoes will he have on Sunday if he gets rid of 'x5' shoes on Saturday?
    let totalShoes = x1 + (x2 * 2) + (x3 * 2) + (x4 * 2) - x5;
    return totalShoes;
}
