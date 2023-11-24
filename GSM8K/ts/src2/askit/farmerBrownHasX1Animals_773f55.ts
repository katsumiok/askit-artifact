// Recompilation count: 0
export function farmerBrownHasX1Animals_773f55({ x1, x2 }: {
    x1: number; // total number of animals
    x2: number; // total number of legs
}): number {
    // find how many extra legs we have compared to if all animals were chickens (2 legs per animal)
    let extraLegs = x2 - 2 * x1;

    // find how many animals these extra legs belong to (each extra pair of legs belongs to one cow)
    let numberOfCows = extraLegs / 2;

    // remaining animals are chickens
    let numberOfChickens = x1 - numberOfCows;

    return numberOfChickens;
}

