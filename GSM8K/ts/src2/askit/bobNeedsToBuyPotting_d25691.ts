// Recompilation count: 0
export function bobNeedsToBuyPotting_d25691({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // Bob needs to buy potting soil to fill the raised beds in his vegetable garden.
    // He has 'x1' raised beds, and each bed is 'x2' feet wide by 'x3' feet long by 'x4' feet tall.
    // Each bag of potting soil holds 'x5' cubic feet of soil and costs $12. 
    // How much will the potting soil cost him?

    // First, calculate the volume of soil needed for one bed
    let soilNeededPerBed = x2 * x3 * x4;
    // Total soil needed for all beds
    let totalSoilNeeded = x1 * soilNeededPerBed;
    // Number of bags needed, considering that each bag holds 'x5' cubic feet. 
    // We use Math.ceil to round up because Bob can't buy part of a bag
    let bagsNeeded = Math.ceil(totalSoilNeeded / x5);
    // Finally, calculate the cost
    let cost = bagsNeeded * 12; 

    return cost; 
}
