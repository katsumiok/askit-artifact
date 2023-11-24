// Recompilation count: 0
export function janetSDucksLayX1_95b845({ x1 }: {
    x1: number;
}): number {
    // Janet’s ducks lay 'x1' eggs per day. 
    // She eats three for breakfast every morning 
    // and bakes muffins for her friends every day with four. 
    // She sells the remainder at the farmers' market daily for $2 per fresh duck egg. 

    // Calculate the remaining eggs after Janet eating breakfast and baking muffins
    let remainingEggs = x1 - 3 - 4;
    
    // If the remaining eggs are negative set to zero
    remainingEggs = remainingEggs < 0 ? 0 : remainingEggs;
    
    // The money Janet make every day at the farmers' market
    let profit = remainingEggs * 2;

    // Return Calculate How much in dollars does she make every day at the farmers' market?
    return profit;
}
