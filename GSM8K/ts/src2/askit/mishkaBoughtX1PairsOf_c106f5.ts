// Recompilation count: 0
export function mishkaBoughtX1PairsOf_c106f5({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    let shortsPrice = 16.50;
    let pantsPrice = 22.50;
    let shoesPrice = 42.00;

    let totalShortsPrice = shortsPrice * x1;
    let totalPantsPrice = pantsPrice * x2;
    let totalShoesPrice = shoesPrice * x3;

    return totalShortsPrice + totalPantsPrice + totalShoesPrice;
}
