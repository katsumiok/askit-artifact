// Recompilation count: 0
export function robertWantsToBuyA_22801d({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Furniture United's total cost calculation
    let furnitureUnitedTotal = 1350 + (x1 * 350);
    // Cozy Homes' total cost calculation
    let cozyHomesTotal = 1100 + (x2 * 250);
    
    // Returning difference between two offers
    return Math.abs(furnitureUnitedTotal - cozyHomesTotal);
}
