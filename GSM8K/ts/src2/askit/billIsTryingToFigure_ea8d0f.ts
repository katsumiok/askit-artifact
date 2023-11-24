// Recompilation count: 0
export function billIsTryingToFigure_ea8d0f({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Bill is trying to figure out how many water bottles he needs to buy for his party. 
    // He started out with 'x1' cases of water which have 'x2' bottles each. 
    // He has 'x3' guests that will be arriving, 
    // and he wants to have 'x4' bottles of water for each guest. 
    // How many additional bottles of water will he need to buy?

    // calculate total bottles needed for all guests
    let totalBottlesNeeded = x3 * x4;

    // calculate total bottles available initially
    let totalBottlesAvailable = x1 * x2;

    // calculate additional bottles needed
    let additionalBottlesNeeded = totalBottlesNeeded - totalBottlesAvailable;

    // return additional bottles needed
    // if additional bottles needed is less than or equals 0, return 0
    return additionalBottlesNeeded > 0 ? additionalBottlesNeeded : 0;
}
