// Recompilation count: 0
export function jennyGoesToTheFlorist_cb84f6({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    
    // Total money Jenny have
    const totalMoneyOnHand = x2 * 5; //in dollars
    
    // Cost for x1 roses
    const numberOfDozens = Math.floor(x1 / 12);
    const numberOfSingleRoses = x1 % 12;
    
    const totalCost = (numberOfDozens * 15) + (numberOfSingleRoses * 2); //in dollars
    
    // Calculate remaining money
    const remainingMoney = totalMoneyOnHand - totalCost; //in dollars
    
    // Convert remaining money into quarters
    const remainingQuarters = remainingMoney * 4; 
   
    // return remaining quarters, there're no negative coins, so return 0 if Jenny doesn't have enough money
    return remainingQuarters >= 0 ? remainingQuarters : 0;
}
