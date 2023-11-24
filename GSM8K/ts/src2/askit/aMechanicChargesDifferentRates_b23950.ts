// Recompilation count: 1
export function aMechanicChargesDifferentRates_b23950({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
   
    // On thursday, mechanic's revenue
    const thursdayRevenue = (x1 * 60) + (x2 * 40);

    // On friday, mechanic repaired only car tires so mechanic's revenue
    const fridayRevenue = (x3 * 40);
    
    // Calculate and return the difference of revenue
    return Math.abs(thursdayRevenue - fridayRevenue);
}
