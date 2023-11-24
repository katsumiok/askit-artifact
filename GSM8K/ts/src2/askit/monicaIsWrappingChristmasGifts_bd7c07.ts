// Recompilation count: 0
export function monicaIsWrappingChristmasGifts_bd7c07({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number { 
    // calculate total number of gifts
    const totalGifts = x1 + x2 + x3;
    // calculate how many inches of ribbon she can use for each gift bow
    const ribbonPerGift = x4 / totalGifts;
    return ribbonPerGift;
}
