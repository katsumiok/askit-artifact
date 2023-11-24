// Recompilation count: 0
export function billIsSigningUpFor_2e93ea({ x1, x2, x3 }: {
    x1: number; // special introductory deal
    x2: number; // normal rate
    x3: number; // total years of service
}): number {
    const monthsInYear: number = 12;
    const specialRate: number = 8;
    const normalRate: number = 12;
    const increasedRate: number = 14;

    let totalCost: number = 0;

    // x3 years of service to months
    let totalTenureMonths = x3 * monthsInYear;

    // cost at $8 per month
    if (totalTenureMonths >= x1) {
        totalCost += x1 * specialRate;
        totalTenureMonths -= x1;
    }
    else {
        totalCost += totalTenureMonths * specialRate;
        totalTenureMonths = 0;
    }

    // cost at $12 per month
    if (totalTenureMonths >= x2) {
        totalCost += x2 * normalRate;
        totalTenureMonths -= x2;
    }
    else {
        totalCost += totalTenureMonths * normalRate;
        totalTenureMonths = 0;
    }

    // remaining months cost at $14 per month
    totalCost += totalTenureMonths * increasedRate;

    return totalCost;
}
