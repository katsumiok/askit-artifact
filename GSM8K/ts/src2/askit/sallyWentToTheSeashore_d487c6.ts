// Recompilation count: 0
export function sallyWentToTheSeashore_d487c6({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {

    let totalTaffyPrice: number;
    const taffyFullPoundPrice = x1 * 3;
    const taffyHalfPoundPrice = (x2 * 3) / 2;

    if(x3 <= x1) {
        totalTaffyPrice = x3 * 3;
    } else {
        totalTaffyPrice = taffyFullPoundPrice + ((x3 - x1) * taffyHalfPoundPrice);
    }

    const magnetsPrice = x4 * 0.25;
    const seashellsPrice = 1.5;

    const totalSpent = totalTaffyPrice + magnetsPrice + seashellsPrice;

    return 10 - totalSpent;
}
