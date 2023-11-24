// Recompilation count: 1
export function kimSleepwalksToMonitorHer_c47912({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Convert sleep time from pm to 24-hour format.
    const sleepTime = x1 > 12 ? x1 : x1 + 12;

    // Calculate total possible sleep time (in minutes) from sleep time to wake up time.
    const totalSleepTime = x2 > sleepTime ? 
                           (x2 - sleepTime) * 60 : 
                           ((24 - sleepTime) + x2) * 60;

    // Subtract the sleepwalking time (23 minutes from 2:15 to 2:38) and the time she woke up earlier.
    const actualSleepTime = totalSleepTime - 23 - x3;

    return actualSleepTime;
}
