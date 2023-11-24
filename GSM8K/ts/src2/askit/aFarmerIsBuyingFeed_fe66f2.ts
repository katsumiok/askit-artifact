// Recompilation count: 0
export function aFarmerIsBuyingFeed_fe66f2({x1} : {x1: number}): number {
    let sugarCubesWeight = 2 * 1; // 2 boxes of 1 pound each
    let carrotsWeight = 4 * 12; // 4 bags of 12 pounds each
    let hayWeight = 42 * 75; // 42 bales of 75 pounds each
    let oatsWeight = 20 * 65; // 20 sacks of 65 pounds each

    let totalWeight = sugarCubesWeight + carrotsWeight + hayWeight + oatsWeight;
    let trips = Math.ceil(totalWeight / x1); // we use Math.ceil to round up to the nearest whole number, because if there's any extra weight that does not fit in one trip, he will need to make an additional one.
    
    return trips;
}
