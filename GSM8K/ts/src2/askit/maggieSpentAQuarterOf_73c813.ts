// Recompilation count: 0
export function maggieSpentAQuarterOf_73c813({}: {}): number {
    // Maggie spent a quarter of her money, while Riza spent one-third of her money. They each had $60. 
    // How much money do the two of them have left?
    let eachPersonInitialMoney = 60;   // Both had $60 initially 
    
    let maggieSpent = eachPersonInitialMoney / 4;    // Maggie spent a quarter of her money
    let rizaSpent = eachPersonInitialMoney / 3;      // Riza spent one-third of her money

    // Total money left
    let moneyLeft = (eachPersonInitialMoney - maggieSpent) + (eachPersonInitialMoney - rizaSpent);

    return moneyLeft;
}
