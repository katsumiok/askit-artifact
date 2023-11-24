// Recompilation count: 0
export function cynthiaEatsOneServingOf_6b0eaf({ x1, x2 }: {
    x1: number;
    x2: number;
}): number { 
    // first we determine the number of cartons she would require
    let cartonsNeeded = Math.ceil(x2 / x1); 
    // then we multiply it by the cost per carton
    let totalCost = cartonsNeeded * 4;
    // we return the total cost
    return totalCost;
}
