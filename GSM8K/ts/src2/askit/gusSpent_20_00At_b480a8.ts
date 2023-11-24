// Recompilation count: 0
export function gusSpent_20_00At_b480a8({ x1 }: { x1: number; }): number {
    // Gus spent $20.00 at the grocery store.  He bought 'x1' bag of chips for $2.00 each, a bucket of fried chicken for $8.00 and a bottle of soda for $1.00.  How much did the apple pie cost?

    // calculate the total cost of the bag of chips, fried chicken and soda
    const totalSpent = x1 * 2 + 8 + 1;

    // calculate and return the cost of the apple pie by subtracting the cost of other items from the total amount Gus spent
    return 20 - totalSpent;
}
