// Recompilation count: 0
export function bobbyTakesAX1Min_06ff31({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Bobby takes a 'x1' min lunch and 'x2' 15 minutes break per day at the office.
    // After 'x3' days, how many hours do his lunches and breaks add up to?
    const totalMinutesPerDay = (x1 + x2 * 15);
    const totalMinutes = totalMinutesPerDay * x3;
    const hours = totalMinutes / 60; // Convert minutes to hours
    return hours;
}
