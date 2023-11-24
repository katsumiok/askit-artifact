// Recompilation count: 0
export function toMakeX1LiterOf_cd5af1({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // To make 'x1' liter of juice, Sam needs 'x2' kilograms of oranges. 
    // Each kilogram of oranges costs $3. 
    // How much money would Sam have to spend to make 'x3' liters of juice?
    
    // First, we need to determine how many kilograms of oranges it takes to make 1 liter of juice.
    let kilogramsPerLiter = x2 / x1;

    // Now we can find out how many kilograms of oranges are needed to make 'x3' liters of juice.
    let totalKilogramsRequired = kilogramsPerLiter * x3;

    // Now, since each kilogram of oranges costs $3, we can determine the total cost.
    let totalCost = totalKilogramsRequired * 3;

    return totalCost;
}
