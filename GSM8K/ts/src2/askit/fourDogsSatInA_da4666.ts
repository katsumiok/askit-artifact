// Recompilation count: 0
export function fourDogsSatInA_da4666({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Dachshund's weight (twice as much as the Affenpinscher)
    const dachshundWeight = x1 * 2;

    // Papillon's weight (one-fourth as much as the Dachshund)
    const papillonWeight = dachshundWeight / 4;

    // Mastiff's weight ('x2' times the weight of the Papillon)
    const mastiffWeight = papillonWeight * x2;

    // Return Mastiff's weight
    return mastiffWeight;
}
