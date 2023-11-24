// Recompilation count: 0
export function lorieEarns_10PerHour_7ff496({ x1 }: {
    x1: number;
}): number {
        // Lorie earns $10 per hour. Karen earns twice what Lorie earns. How much does Karen earn in two days if she works 'x1' hours per day?
    let lorieRate: number = 10;
    let karenRate:number = 2 * lorieRate;
    let earnings: number = 2 * x1 * karenRate;
    return earnings;
    }
