// Recompilation count: 0
export function colbyWorksForAManufactur_44a702({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Colby works for a manufacturing company in the packaging division.
    // He gets paid $0.20 for every package he completes. 
    // If he completes 'x1' less than 'x2' packages per hour, 
    // how much money, in dollars, does he earn in a typical eight-hour workday?

    // Calculate the number of packages Colby completes per hour
    let packagesPerHour: number = x2 - x1;

    // Calculate Colby's total earnings for an eight-hour workday
    let earnings: number = packagesPerHour * 0.2 * 8;

    return earnings;
}
