// Recompilation count: 0
export function sarahHasARopeThat_f3d6a6({ x1 }: {
    x1: number;
}): number {
        // Sarah has a rope that is 'x1' meters long. Her friend wants to buy the rope for $2 a meter. Sarah plans to use the profit to buy a new rope, which at the store costs $1.5 a meter. How much money will she have left over after she buys the new rope?
    
        // calculate how much she earns from selling the old rope
        const sellingPrice = 2;
        let profit = x1 * sellingPrice;

        // calculate how much she needs to spend to buy the new rope
        const buyingPrice = 1.5;
        let expense = x1 * buyingPrice;

        // calculate how much money she has left over
        let leftover = profit - expense;

        return leftover;
    }
