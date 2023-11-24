// Recompilation count: 0
export function theRecentFloodsInMamou_d66d60({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // The total meals available is 1360
    let totalMeals = 1360;
    
    // Subtract the distributed meals from the total
    let remainingMeals = totalMeals - (x1 + x2 + x3);

    // Return the remaining meals
    return remainingMeals;
}
