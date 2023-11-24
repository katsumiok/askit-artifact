// Recompilation count: 0
export function georgeHas_45MorePears_3f8580({ x1 }: {
    x1: number;
}): number {
    // Calculate the number of pears George has (45% more than bananas)
    let pears = x1 + (x1 * 0.45);

    // The total number of fruits George has is the sum of his bananas and pears
    let totalFruits = x1 + pears;

    return totalFruits;
}
