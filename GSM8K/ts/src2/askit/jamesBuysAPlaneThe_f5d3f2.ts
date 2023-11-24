// Recompilation count: 0
export function jamesBuysAPlaneThe_f5d3f2({}: {} = {}): number {
    const planeCost = 150000;
    const hangerRentPerMonth = 5000;
    const fuelCostPerMonth = hangerRentPerMonth * 2;
    const months = 12;

    let totalCostFirstYear = planeCost + (hangerRentPerMonth + fuelCostPerMonth) * months;

    return totalCostFirstYear;
}
