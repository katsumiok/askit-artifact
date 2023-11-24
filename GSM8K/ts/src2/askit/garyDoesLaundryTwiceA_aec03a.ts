// Recompilation count: 0
export function garyDoesLaundryTwiceA_aec03a({ x1 }: {
    x1: number;
}): number {
    // Gary does laundry twice a week. Each load of laundry uses 'x1' gallons of water, and a gallon of water costs $0.15. How much does Gary spend on water for laundry in a year?
    const weeksInYear = 52;
    const waterCostPerGallon = 0.15;
    const loadsPerWeek = 2;
    
    let totalCost = x1 * waterCostPerGallon * loadsPerWeek * weeksInYear;
    return totalCost;
}
