// Recompilation count: 0
export function billyIsVolunteeriHisTime_6ff86b({ x1, x2, x3 }: { x1: number; x2: number; x3: number }): number {
    // Total days between March 1st and April 19th is the number of days in March plus 19 days in April
    const totalDays = x3 + 19;
   
    // Billy takes 20% of the days off, so he works 80% of the days
    const workDays = totalDays * 0.8;

    // Billy can help 'x1' people per hour for 'x2' hours a day
    const peoplePerDay = x1 * x2;
   
    // Total people he helps is people per day times the number of days he works
    const totalPeople = peoplePerDay * workDays;

    return totalPeople;
}
