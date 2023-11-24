// Recompilation count: 1
export function afterTrackingHisWorkoutRoutine_c7e767({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // First, find the total hours if he worked out 'x2' hours every week for 'x5' weeks
    let totalHours = x2 * x5;

    // Since he worked out 'x3' hours for two weeks, we subtract '2*x2' (the hours he would have normally worked out those weeks)
    // and add '2*x3' to get the corrected total
    totalHours = totalHours - 2 * x2 + 2 * x3;

    // Same correction for the week he worked out 'x4' hours
    totalHours = totalHours - x2 + x4;

    // return the total hours
    return totalHours;
}
