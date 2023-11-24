// Recompilation count: 0
export function johnIsVeryTiredHe_97a75d({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Convert x4 hours to minutes
    const totalMinutesBeforeDinner = x4 * 60;
    
    // Sum up the total homework time in minutes
    const totalHomeworkTime = x1 + x2 + x3;

    // Subtract the total homework time from total minutes before dinner to find nap time
    const napTime = totalMinutesBeforeDinner - totalHomeworkTime;

    // Return the nap time
    return napTime;
}
