// Recompilation count: 0
export function aFarmHasX1_2_a94dfb({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // A farm has 'x1' 2-legged animals and 'x2' 4-legged animals. If all animals are healthy, how many pairs of animal legs in total are on the farm?
    let totalLegs = (x1 * 2) + (x2 * 4);
    let totalPairs = totalLegs / 2;
    return totalPairs;
}
