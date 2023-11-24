// Recompilation count: 0
export function theHortexCompanyProducesBottled_661c84({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // The Hortex company produces bottled carrot juices. Every day it can produce 'x1' bottles of these juices. Each juice can cover 20% of 'x2' person'ts daily energy demand. How many more bottles of juices would Hortex have to produce to be able to satisfy 100% of the daily energy needs of 'x3' people?
    let bottlesPerPerson = x2 * 5; // Calculate total bottles needed for 1 person(100% energy) because each juice covers 20% of the energy demand
    let totalBottlesRequired = bottlesPerPerson * x3; // Total bottles required for 'x3' people
    let additionalBottlesRequired = totalBottlesRequired - x1; // Additional bottles required
    return additionalBottlesRequired < 0 ? 0 : additionalBottlesRequired; // If already enough bottles are produced return 0
}
