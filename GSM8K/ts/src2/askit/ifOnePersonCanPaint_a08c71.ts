// Recompilation count: 0
export function ifOnePersonCanPaint_a08c71({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // If one person can paint half a house in 'x1' days, how many hours would it take for 'x2' people to paint a whole house?
    let daysNeededForWholeHouse = 2 * x1;  // As one person can paint half a house in x1 days
    let totalHours = daysNeededForWholeHouse * 24;  // Convert days to hours
    let hoursNeededForXPeople = totalHours / x2;  // If x2 people are painting the house, time required will be divided by x2
    return hoursNeededForXPeople;
    }
