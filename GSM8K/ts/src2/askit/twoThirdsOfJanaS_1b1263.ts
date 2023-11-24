// Recompilation count: 0
export function twoThirdsOfJanaS_1b1263({ x1 }: {
    x1: number;
}): number {
    // If there are 'x1' girls, it means there are '3 * x1' Pomeranians because one third of Pomeranians are girls.
    // Now, if two thirds of all puppies are Pomeranians, it means there are '* 3 / 2' puppies in total.
    // To calculate the total number of puppies, we multiply the number of Pomeranian girls by 3 (to get all Pomeranians) and then by 3/2 (to get all puppies).
    return x1 * 3 * 3 / 2;
}
