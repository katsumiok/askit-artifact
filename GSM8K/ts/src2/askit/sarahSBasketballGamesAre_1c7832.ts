// Recompilation count: 0
export function sarahSBasketballGamesAre_1c7832({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // The total time for 'x1-1' quarters
    let normalGameTime = (x1 - 1) * x2;

    // The time for the last quarter which was extended by 5 minutes
    let extendedQuarterTime = x2 + 5;

    // The total game time
    let totalGameTime = normalGameTime + extendedQuarterTime;

    return totalGameTime;
}
