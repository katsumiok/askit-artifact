// Recompilation count: 0
export function parkerChewsX1PiecesOf_b0e516({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Parker chews 'x1' pieces of gum a day.  A pack of gum has 'x2' pieces of chewing gum per pack.  How many packs of gum will he need to last him 'x3' days?
    let totalPiecesNeeded = x1 * x3;
    let packsNeeded = totalPiecesNeeded / x2;
    // since a pack cannot be a fraction, whenever there's a remainder, Parker will need an extra pack.
    return Math.ceil(packsNeeded);
}
