// Recompilation count: 0
export function inX1DaysSofieWill_91cf5b({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Sofie walks twice as far as Brian in 'x1' days.
    // If Sofie plans to walk 'x2' miles every day, 
    // then Brian walks 'x2 / 2' miles every day.
    
    // We assume that Brian and Sofie walk the same everyday of the week.
    // Therefore, in 7 days, Brian will walk 7 * (x2 / 2) miles.
    return 7 * (x2 / 2);
}
