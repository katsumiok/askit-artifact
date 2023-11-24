// Recompilation count: 0
export function sevenBottlesOfSodaCost_95b0ec({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Seven bottles of soda cost $21.00 while 'x1' bottles of water cost $8. If David wants to buy 'x2' bottles of soda and 'x3' bottles of water, how much will that cost?

        // calculate the price per bottle for soda and bottle of water
        const costPerSoda = 21.00 / 7; 
        const costPerWater = 8.00 / x1; 

        // calculate cost for 'x2' bottles of soda and 'x3' bottles of water
        const sodaCost = costPerSoda * x2; 
        const waterCost = costPerWater * x3; 

        // calculate total cost
        const totalCost = sodaCost + waterCost; 

        return totalCost;
    } 

