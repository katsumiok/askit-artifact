// Recompilation count: 0
export function jamesLikesToCheckThe_74bc1c({ x1 }: {
    x1: number;
}): number {
    // Value of coins in cents
    const quarter = 25;
    const nickel = 5;
    const dime = 10;

    // Total money James has
    const totalMoney = quarter + 2 * nickel + x1 * dime;

    return totalMoney;
}
