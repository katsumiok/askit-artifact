// Recompilation count: 0
export function micoAndMarcoWantedTo_9712e9({ x1 }: {
    x1: number;
}): number {
    // Mico and Marco wanted to get to know each other. They realized that the sum of their ages is 20. What will be the sum of their ages in 'x1' years?
    let currentAgeSum = 20; // The sum of Mico's and Marco's current ages
    let futureAgeSum = currentAgeSum + (x1 * 2); // Their ages in 'x1' years will be their current ages plus 'x1' years for each
    return futureAgeSum;
}
