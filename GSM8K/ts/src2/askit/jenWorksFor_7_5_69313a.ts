// Recompilation count: 6
export function jenWorksFor_7_5_69313a({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // calculate daily wage
    let dailyWage = 7.5 * 1.5;

    // calculate weekly wage
    let weeklyWage = dailyWage * x1;

    // calculate monthly wage
    let monthlyWage = weeklyWage * x2;

    // add attendance bonus
    let totalPay = monthlyWage + (x2 === 4 ? 10 : 0);

    return totalPay;
}
