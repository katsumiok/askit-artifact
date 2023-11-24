// Recompilation count: 0
export function markPlantsABeanstalkBelow_df4055({ x1, x2 }: { x1: number, x2: number }): number {
    let numberOfDays = 0;
    while (x2 <= x1) {
        x2 *= 2;
        numberOfDays += 1;
    }
    return numberOfDays;
}
