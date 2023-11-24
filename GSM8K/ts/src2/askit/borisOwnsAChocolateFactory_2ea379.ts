// Recompilation count: 0
export function borisOwnsAChocolateFactory_2ea379({}: {}): number {
    let monthlyProduction = 50000;
    
    let firstWeekProduction = 8000;
    let secondWeekProduction = firstWeekProduction / 2;
    let thirdWeekProduction = firstWeekProduction * 3;
    
    let totalThreeWeeksProduction = firstWeekProduction + secondWeekProduction + thirdWeekProduction;
    
    let fourthWeekProduction = monthlyProduction - totalThreeWeeksProduction;
    
    return fourthWeekProduction;
}
