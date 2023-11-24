// Recompilation count: 0
export function givenA_7DayWeek_02c04f({ x1 }: {x1: number;}): number {
    // Given a 7-day week, how much does Alex charge for 'x1' weeks of tutoring if she charges $12 per day?
    const dailyCharge = 12;
    const weekDays = 7;

    return x1 * dailyCharge * weekDays;
}
