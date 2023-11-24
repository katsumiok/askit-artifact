// Recompilation count: 0
export function roseBoughtFiveDozensOf_49a3bc({ x1 }: {
    x1: number;
}): number {
        // Rose bought five dozens of eggs for $2.40 a dozen. She will sell it for $1 for 'x1' eggs. How much will be Rose's profit?
        const dozensBought = 5;
        const costPerDozen = 2.4;
        const costOfEggs = dozensBought * costPerDozen;
        
        const totalEggs = dozensBought * 12;
        const sellingPricePerEgg = 1 / x1;
        
        const totalSellingPrice = totalEggs * sellingPricePerEgg;
        
        const profit = totalSellingPrice - costOfEggs;
        
        return profit;
    }
