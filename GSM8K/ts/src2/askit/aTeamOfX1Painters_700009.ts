// Recompilation count: 7
export function aTeamOfX1Painters_700009({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    
    // Number of days in a week
    const daysInAWeek: number = 7;
    
    // Hours in a day
    const hoursInADay: number = 24;

    // As each day they worked for 3/8ths of a day
    const dailyWorkHours = hoursInADay * (3/8);
    
    // Total weeks converted to days
    const totalDays: number = x2 * daysInAWeek;
    
    // Total hours each painter worked
    const totalWorkHours: number = totalDays * dailyWorkHours;

    return totalWorkHours;
}
