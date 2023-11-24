// Recompilation count: 0
export function terrySellsX1MilkshakesFor_9887f1({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Terry sells 'x1' milkshakes for $5.50 each, nine burger platters for $11 each
    // and 'x2' sodas for $1.50 each. How much money does he make in total?
    const milkshakePrice = 5.50;
    const burgerPrice = 11.00;
    const sodaPrice = 1.50;
    const burgerQuantity = 9;

    const totalMoneyMade = (x1 * milkshakePrice) + (burgerQuantity * burgerPrice) + (x2 * sodaPrice);
    
    return totalMoneyMade;
}
