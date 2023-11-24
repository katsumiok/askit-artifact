// Recompilation count: 0
export function whileJoanneIsGatheringApples_402483({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    let shortestTreesApples = x1 / 2;
    let sisterApplesTallest = x1 * 2;
    let sisterApplesShortest = shortestTreesApples * x2;
    let totalCollected = x1 + shortestTreesApples + sisterApplesTallest + sisterApplesShortest;
    let joanneAverageTreesApples = x3 - totalCollected;
    return joanneAverageTreesApples;
}
