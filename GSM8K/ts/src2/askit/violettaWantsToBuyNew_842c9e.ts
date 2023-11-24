// Recompilation count: 0
export function violettaWantsToBuyNew_842c9e({ x1 }: { x1: number; }): number { 
    // Violetta wants to buy new crayons. She needs them in 'x1' different colors and prepared $20 for this purchase. One crayon costs $2. How much change will she get?
    const totalCost = x1 * 2; // calculate the total cost
    const change = 20 - totalCost; // calculate the change
    return change;
}
