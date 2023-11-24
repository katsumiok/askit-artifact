// Recompilation count: 0
export function tylerWantsToBuyA_7c4939({}: {}): number {
    // define the costs
    let dictionaryCost: number = 18;
    let dinosaurBookCost: number = 13;
    let cookbookCost: number = 8;
    
    // define how much money Tyler already has and his hourly earnings
    let moneySaved: number = 14;
    let hourlyEarnings: number = 5;
    
    // calculate total cost of the books
    let totalCost: number = dictionaryCost + dinosaurBookCost + cookbookCost;
    
    // calculate how much more money Tyler needs
    let moneyNeeded: number = totalCost - moneySaved;
    
    // calculate how many hours Tyler needs to work
    let hoursNeeded: number = moneyNeeded / hourlyEarnings;
    
    // return the result
    return Math.ceil(hoursNeeded); // we round up because Tyler can't work a fraction of an hour
}
