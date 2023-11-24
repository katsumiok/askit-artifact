// Recompilation count: 0
export function whenSophieWatchesHerNephew_24ca75({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Calculating total number of known toys
    let totalKnownToys = x1 + x2 + x3;

    // The total number of toys is 62, so subtracting to find number of bouncy balls
    let numberOfBouncyBalls = 62 - totalKnownToys;

    return numberOfBouncyBalls;
}
