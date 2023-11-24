// Recompilation count: 0
export function jamieEarns_20PerHour_733bdb({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Jamie earns $20 per hour for 'x1' hours of work each day. Should she need to work additional hours, she is paid a special hourly rate that is 150% of her regular hourly rate. Last Tuesday, she worked 'x2' hours. How much was she paid, in dollars, for her work that day?
    let regularHoursPay = Math.min(x1, x2) * 20;
    let extraHoursPay = Math.max(0, x2 - x1) * 20 * 1.5;
    return regularHoursPay + extraHoursPay;
    }
