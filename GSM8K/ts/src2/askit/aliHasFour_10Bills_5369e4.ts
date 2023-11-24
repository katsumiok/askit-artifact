// Recompilation count: 0
export function aliHasFour_10Bills_5369e4({}: {}): number {
    // Ali has four $10 bills and six $20 bills
    let total = 4 * 10 + 6 * 20;
    
    // Ali gives her sister half of the total
    total /= 2;

    // Ali uses 3/5 of the remaining to buy dinner
    total -= 3 / 5 * total;

    // Return the total money Ali has after buying dinner
    return total;
}
