// Recompilation count: 0
export function nateIsFeedingHisLivestock_423c55({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Each goat needs 'x1' pounds
    const totalGoatFeed = x1 * x3;

    // Each sheep needs 'x2' pounds less than twice the amount each goat needs
    const sheepFeedPerOne = (2 * x1) - x2;
    const totalSheepFeed = sheepFeedPerOne * x4;

    // The total amount of hay needed is the sum of the total for the goats and the sheep
    return totalGoatFeed + totalSheepFeed;
}
