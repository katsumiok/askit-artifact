// Recompilation count: 0
export function tomPlantsX1TreesA_af672f({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // First calculate the net change in trees per year (planted - chopped).
    const netChangePerYear = x1 - x2;
    
    // Next, calculate the total number of trees after 'x4' years without considering the yearly die-off.
    const totalTreesAfterX4Years = x3 + (netChangePerYear * x4);

    // Finally, account for the 30% of trees that die off every year.
    const treesLeft = totalTreesAfterX4Years - (totalTreesAfterX4Years * 0.3);

    return Math.round(treesLeft);
}
