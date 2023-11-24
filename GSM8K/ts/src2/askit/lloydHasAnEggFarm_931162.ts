// Recompilation count: 0
export function lloydHasAnEggFarm_931162({ x1 }: {
    x1: number;
}): number {
        // Lloyd has an egg farm. His chickens produce 'x1' eggs per day and he sells them for $2 per dozen. How much does Lloyd make on eggs per week?

        // Number of dozens per day
        const dozensPerDay = x1 / 12;
        // Revenue per day
        const revenuePerDay = dozensPerDay * 2;
        // Revenue per week
        const revenuePerWeek = revenuePerDay * 7;
        
        return revenuePerWeek;
    }
