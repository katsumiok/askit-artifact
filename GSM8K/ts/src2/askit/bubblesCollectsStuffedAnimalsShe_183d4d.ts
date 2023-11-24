// Recompilation count: 3
export function bubblesCollectsStuffedAnimalsShe_183d4d({}: {}): number {
    // Bubbles collects stuffed animals. She has three stuffed puppies, five stuffed koalas, two stuffed zebras and four stuffed frogs. 
    // If she wants to buy enough stuffed goats, such that the percentage of stuffed goats is 30% of all of her stuffed animals, 
    // how many stuffed goats should she buy?

    const currentAnimalsCount = 3 /* puppies */ + 5 /* koalas */ + 2 /* zebras */ + 4 /* frogs */;
    // We need to find the total number of animals for which the currentAnimalsCount is 70%
    // By a simple mathematical rule, we know that (70/100 * totalAnimalsCount) = currentAnimalsCount
    const totalAnimalsCount = currentAnimalsCount / 0.7;

    // The number of goats should be 30% of the totalAnimalsCount,
    // but since we've already calculated the number of currently owned stuffed animals, 
    // we can simply subtract this from the totalAnimalsCount to get the number of goats.
    const goatsCount = totalAnimalsCount - currentAnimalsCount;

    // We round the answer to the nearest whole number since the number of stuffed animals can't be in fractions.
    return Math.round(goatsCount);
}
