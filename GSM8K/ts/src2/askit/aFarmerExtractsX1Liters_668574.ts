// Recompilation count: 0
export function aFarmerExtractsX1Liters_668574({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // A farmer extracts 'x1' liters of milk a day from a cow. Since he has 'x2' cows, how many more cows does he need to have to produce 'x3' liters of milk a day?
    // First, let's find how much milk the farmer currently produces with his cows
    let currentProduction = x1 * x2;

    // To find how many more cows the farmer needs, we subtract the current production from the desired production
    // If the result is zero or negative, the farmer doesn't need any more cows
    if (x3 <= currentProduction) {
        return 0;
    }

    // Then we subtract the current production from the desired production (x3)
    let neededProduction = x3 - currentProduction;

    // Finally, we divide the needed production by the amount of milk one cow can produce to find the number of additional cows needed
    // We also use Math.ceil to round up to the nearest integer, because the farmer can't have a fraction of a cow
    return Math.ceil(neededProduction / x1);
}
