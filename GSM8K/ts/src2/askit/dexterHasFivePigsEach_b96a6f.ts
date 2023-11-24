// Recompilation count: 0
export function dexterHasFivePigsEach_b96a6f({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Dexter has five pigs. Each one eats 'x1' pounds of feed, twice a day. 
    // If Dexter ordered 'x2' pounds of feed, how many pounds of feed is left after a week?
    
    let totalDailyConsumption = 5 * x1 * 2; // total feed eaten by 5 pigs in a day
    let totalWeeklyConsumption = totalDailyConsumption * 7; // total feed eaten by 5 pigs in a week

    let remainingFeed = x2 - totalWeeklyConsumption; // pounds of feed left

    return remainingFeed;
}
