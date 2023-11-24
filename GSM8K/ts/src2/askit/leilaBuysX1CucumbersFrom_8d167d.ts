// Recompilation count: 0
export function leilaBuysX1CucumbersFrom_8d167d({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Leila buys 'x1' cucumbers from the market. Cucumbers are $2 each. 
    let costOfCucumbers = x1 * 2;
    
    // Jack buys 'x2' tomatoes from the grocery store.  Tomatoes are $1 each. 
    let costOfTomatoes = x2 * 1;
    
    // Chase buys 'x3' head of lettuce from the farmer’s market.  Lettuce cost $3 each. 
    let costOfLettuce = x3 * 3;
  
    // Together, how much did the three of them spend to make a salad for the potluck?
    let totalCost = costOfCucumbers + costOfTomatoes + costOfLettuce;

    return totalCost;
}
