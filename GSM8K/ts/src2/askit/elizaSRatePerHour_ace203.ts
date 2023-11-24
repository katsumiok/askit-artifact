// Recompilation count: 0
export function elizaSRatePerHour_ace203({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Eliza's rate per hour for the first 'x1' hours she works each week is $10. She also receives an overtime pay of 1.2 times her regular hourly rate. If Eliza worked for 'x2' hours this week, how much are her earnings for this week?
    let regularPay = x1 * 10;
    let overtimeHours = x2 > x1 ? x2 - x1 : 0;
    let overtimePay = overtimeHours * 10 * 1.2;
    return regularPay + overtimePay;
}
