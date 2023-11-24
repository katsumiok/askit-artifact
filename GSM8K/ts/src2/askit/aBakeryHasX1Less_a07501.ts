// Recompilation count: 0
export function aBakeryHasX1Less_a07501({ x1 }: {
    x1: number;
}): number {
    // calculate seven times as many loaves of bread as Sam had last Friday
    let samBreadCount = 70;
    let sevenTimesSamBreadCount = 7 * samBreadCount;

    // calculate how many loaves of bread the bakery has
    let bakeryBreadCount = sevenTimesSamBreadCount - x1;

    // return the number of loaves of bread the bakery has
    return bakeryBreadCount;
}
