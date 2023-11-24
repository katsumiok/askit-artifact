// Recompilation count: 0
export function kiraBoughtX1ApplesX2_fcc038({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Kira bought 'x1' apples, 'x2' bananas and 'x3' oranges at the grocery store. Lola ate 'x4' pieces of the fruit. How many pieces are left?
    let totalFruits = x1 + x2 + x3;
    let fruitsLeft = totalFruits - x4;
    return fruitsLeft;
}
