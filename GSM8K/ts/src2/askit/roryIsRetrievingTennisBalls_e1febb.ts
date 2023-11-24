// Recompilation count: 0
export function roryIsRetrievingTennisBalls_e1febb({ x1 }: {
    x1: number;
}): number {
    // Let the number for the second set be 'x'
    // So, for the first set, he retrieved 'x + 4' balls
    // And for the third set, he retrieved 'x / 2' balls
    // Total balls 'x1' is the sum of all sets, we can set up the equation:
    // x1 = x + (x + 4) + (x / 2)
    // Simplifying gives us: 2.5x + 4 = x1
    // Therefore, x (the number of balls in the second set) = (x1 - 4) / 2.5
    // And in the first set, he retrieved (x + 4) balls
    let x = (x1 - 4) / 2.5;
    return x + 4;
}
