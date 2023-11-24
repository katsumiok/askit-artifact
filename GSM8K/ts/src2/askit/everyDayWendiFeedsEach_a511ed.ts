// Recompilation count: 0
export function everyDayWendiFeedsEach_a511ed({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // every day chicken needs to eat 3 cups of meal (1 cup per meal: morning, afternoon, and the final meal)
    // so, total amount in a day for all chickens = total chickens * 3 
    // then subtract the morning and afternoon meals to find out the last meal.

    return (x3 * 3) - (x1 + x2);
}
