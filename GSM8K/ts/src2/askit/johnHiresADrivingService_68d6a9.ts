// Recompilation count: 5
export function johnHiresADrivingService_68d6a9({x1, x2, x3}: {x1: number; x2: number; x3: number;}): number {
    // Total miles driven each day = distance to work and back
    let totalMilesPerDay = x1 * 2;

    // Total miles driven per week = total miles per day * days of week
    let totalMilesPerWeek = totalMilesPerDay * x2;

    // Total miles driven per year = total miles per week * weeks of year
    let totalMilesPerYear = totalMilesPerWeek * x3;

    // Costs per mile = $2
    let costPerMile = 2;

    // Total cost for miles driven per year
    let totalCostForMilesDrivenPerYear = totalMilesPerYear * costPerMile;

    // Monthly bonus to driver = $150,
    // So, annual bonus = monthly bonus * 12 months
    let annualBonus = 150 * 12;

    // Total annual cost = total cost for miles + annual bonus to driver
    let totalAnnualCost = totalCostForMilesDrivenPerYear + annualBonus;

    return totalAnnualCost;
}
