// Recompilation count: 0
export function atAllanSHouseThere_f0bf08({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {

    // Initially, twice as much corn as cannolis is at Allan's house, implies Number of corns = 2 * x1
    let initialCorn = 2 * x1;

    // Allan buys 'x2' more cannolis. So, total Cannolis = Initial Cannolis + bought Cannolis
    let totalCannolis = x1 + x2;

    // Allan bought 'x3' fewer corns than the number of cannolis. So, Total Corns = Initial Corn + (Cannolis from store - x3)
    let totalCorn = initialCorn + (x2 - x3);

    // return the combined total of the number of corns and cannolis Allan has in the house.
    return totalCorn + totalCannolis;
}
