// Recompilation count: 0
export function jamesGetsAJobSelling_8ae23a({ x1 }: {
    x1: number;
}): number {
    // Calculate the total revenue from the sold cars
    const totalRevenue = x1 * 25000;

    // Calculate the cost the company paid to acquire the cars
    const acquisitionCost = totalRevenue * 0.3;

    // Calculate the profits
    const profits = totalRevenue - acquisitionCost;

    // Calculate James' commission
    const jamesCommission = profits * 0.1;

    // Return his earnings
    return jamesCommission;
}

