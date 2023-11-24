// Recompilation count: 0
export function mariaBuysX1SharesOf_106554({ x1 }: {
    x1: number;
}): number {
        // Maria buys 'x1' shares of a stock for $8 each. 
        let initialCost = x1 * 8;
        // The stock price increases 50% the first year Maria holds it, 
        initialCost *= 1.5;
        // then decreases 25% in the second year. 
        initialCost *= 0.75;
        // What is the final value of all Maria's shares?
        return initialCost;
}
