// Recompilation count: 0
export function nikHasX1CrayonsHe_44e57c({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {       
    // compute total crayons weight (in ounces)
    const totalCrayonsWeight: number = x1 * x4;

    // compute total boxes weight (in ounces)
    const totalBoxesWeight: number = Math.ceil(x1/x2) * x3;

    // sum total weights (in ounces)
    const totalWeightOunces: number = totalCrayonsWeight + totalBoxesWeight;

    // convert total weight to pounds
    const totalWeightPounds: number = totalWeightOunces / x5;

    return totalWeightPounds;
}
