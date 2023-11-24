// Recompilation count: 0
export function georgeNeedsToPayFor_cdb0cb({ x1 }: {
    x1: number;
}): number {
    const basePricePerImplant = 2000;
    const porcelainCrownCost = 500;
    const deposit = 600;
    const wagePerHour = 15;

    const totalCost = (basePricePerImplant * x1) + porcelainCrownCost - deposit;

    const hoursToWork = totalCost / wagePerHour;

    return hoursToWork;
}
