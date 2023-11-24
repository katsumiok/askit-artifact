// Recompilation count: 0
export function ariannaPlantsAGardenThat_1cd30c({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Arianna plants a garden that has 'x1' rows of flowers with 'x2' flowers in each row.
    // Currently, only 4/5 of the planted flowers have bloomed. How many flowers in Arianna's garden have bloomed?
    let totalFlowers = x1 * x2;
    let bloomedFlowersCount = totalFlowers * (4/5);
    return bloomedFlowersCount;
}
