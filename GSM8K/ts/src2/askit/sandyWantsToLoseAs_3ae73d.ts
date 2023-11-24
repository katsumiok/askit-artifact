// Recompilation count: 5
export function sandyWantsToLoseAs_3ae73d({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Sandy's weight loss rate is '1/x1' times that of Joey's. If Joey loses 'x2' pounds in 'x3' weeks, the total time required for Sandy to lose 'x2' pounds is 'x1*x3' weeks.
    return x1 * x3;
}
