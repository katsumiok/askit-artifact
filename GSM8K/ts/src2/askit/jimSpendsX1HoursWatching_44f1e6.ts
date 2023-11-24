// Recompilation count: 0
export function jimSpendsX1HoursWatching_44f1e6({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Jim spends 'x1' hours watching TV and then decides to go to bed and reads for half as long.  
    // He does this 'x2' times a week.  
    // How many hours does he spend on TV and reading in 'x3' weeks?

    let totalHoursWatchingTV = x1 * x2 * x3; // total hours spent watching TV
    let totalHoursReading = (x1 / 2) * x2 * x3; // total hours spent reading

    return totalHoursWatchingTV + totalHoursReading;
}
