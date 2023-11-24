// Recompilation count: 0
export function steveAndTimDecideTo_1d4cec({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Convert miles to feet as 1 mile equals 5280 feet.
    const steveDistanceInFeet = x1 * 5280;
    const timDistanceInFeet = x3 * 5280;

    // Calculate time taken by Steve and Tim to reach home in minutes.
    const steveTime = steveDistanceInFeet / x2;
    const timTime = timDistanceInFeet / x4;

    // Calculate and return the waiting time.
    return Math.max(steveTime, timTime) - Math.min(steveTime, timTime);
}
