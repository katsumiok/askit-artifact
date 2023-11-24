// Recompilation count: 0
export function loriNeededX1WholeEgg_1a9b1a({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Lori needed 'x1' whole egg to make 'x2' deviled egg halves.  
    // She anticipates that each of her guests will eat 'x3' deviled egg halves.  
    // If she is inviting 'x4' guests to her party, how many dozens of eggs will she need?

    // First, let's determine how many deviled egg halves each egg makes
    let eggToDeviledRatio = x2 / x1;

    // Next, let's calculate how many total deviled egg halves Lori expects to serve
    let totalDeviledEggsNeeded = x3 * x4;

    // Divide the total number of deviled egg halves by the number of halves each whole egg makes
    // to find the total number of whole eggs she needs
    let totalEggsNeeded = totalDeviledEggsNeeded / eggToDeviledRatio;

    // Since a dozen is 12 eggs, we'll divide the total number of eggs by 12 to 
    // find out how many dozens of eggs are needed. 
    // We will use the Math.ceil function to round up to the next integer if necessary, 
    // since we cannot have a partial dozen.
    return Math.ceil(totalEggsNeeded / 12);
}
