// Recompilation count: 0
export function peterPlansToGoTo_edef6d({ x1 }: {
    x1: number;
}): number {
        // Peter plans to go to the movies this week. He always gets a ticket for $7 and popcorn for $7. If he has 'x1' dollars for the week, how many times can he go to the movies?
    const totalCostPerMovie = 7 + 7; // Cost of movie ticket and popcorn
    return Math.floor(x1 / totalCostPerMovie);
}
