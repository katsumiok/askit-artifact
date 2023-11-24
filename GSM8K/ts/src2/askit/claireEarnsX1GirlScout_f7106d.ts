// Recompilation count: 0
export function claireEarnsX1GirlScout_f7106d({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Amber earns x1 badges every 2 months, so x1/2 badges every month
    let amberPerMonth = x1 / 2;

    // Wendy earns 3*x1 badges every month
    let wendyPerMonth = 3 * x1;

    // Calculate Amber and Wendy's yearly earnings by multiplying the monthly earnings by 12
    let amberPerYear = amberPerMonth * 12;
    let wendyPerYear = wendyPerMonth * 12;
      
    // Now, we multiply the yearly earnings by 'x2' to get the earnings in 'x2' years
    let amberTotal = x2 * amberPerYear;
    let wendyTotal = x2 * wendyPerYear;

    // The final result is Wendy's total earnings minus Amber's total earnings
    return wendyTotal - amberTotal;
}
