// Recompilation count: 0
export function ifEverySecondABubbling_2e7497({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // If every second, a bubbling spring creates a new jellyfish, 
    // how many jellyfish would 'x1' springs working at the same rate create in 'x2' hours?
    // 1 hour is 3600 seconds
    const secondsInHour: number = 3600;
    return x1 * x2 * secondsInHour;
}
