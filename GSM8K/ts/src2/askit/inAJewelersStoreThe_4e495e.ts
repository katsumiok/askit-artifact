// Recompilation count: 0
export function inAJewelersStoreThe_4e495e({}: {}): number {
    // In a jewelers store, the price of a gold Jewell is 4/5 times as much as the price of a diamond Jewell. 
    // The cost of a silver Jewell is $400 less than the price of gold. If a diamond Jewell is $2000, 
    // find the total price for all three jewels.

    let diamondPrice: number = 2000;
    let goldPrice: number = diamondPrice * (4 / 5);
    let silverPrice: number = goldPrice - 400;

    let totalPrice: number = diamondPrice + goldPrice + silverPrice;

    return totalPrice;
}
