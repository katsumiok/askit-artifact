// Recompilation count: 0
export function markIsMakingAQuadruple_177923({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Mark is making a quadruple batch of brownies. The normal recipe calls for 'x1' cups of flour and 'x2' cup milk. 
        // If flour is sold in 2-cup bags and milk is sold in 2-cup bottles, how many more bags of flour than bottles of milk does Mark have to buy?
        
        // Mark is making a quadruple batch, so we find the required quantity by multiplying x1 and x2 by 4
        let flourNeeded = x1 * 4;
        let milkNeeded = x2 * 4;

        // Now we need to find out how many bags/bottles are needed. Since each bag/bottle contains 2 cups, 
        // we divide the required quantity by this amount
        let flourBags = Math.ceil(flourNeeded/2);  // Math.ceil handles rounding up if a bag/bottle is partially used
        let milkBottles = Math.ceil(milkNeeded/2); 

        // We're asked how many MORE bags of flour Mark needs to get than bottles of milk, so we return the difference
        return flourBags - milkBottles; 
    }
