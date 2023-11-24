// Recompilation count: 0
export function mariaWasChargingHerPower_6b21fc({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // At the end, the charge remaining was 28%.
    let finalPercent = 28;

    // In the x2 period, the power bank was losing 7% per hour.
    // We need to add back these percents to get the charge before this period started.
    let afterX1 = finalPercent + (x2 * 7);

    // In the x1 period, the power bank was losing 9% per hour.
    // We need to add back these percents to get the charge before this period started - which is the initial charge when Maria left home.
    let initialPercent = afterX1 + (x1 * 9);

    return initialPercent;
}
