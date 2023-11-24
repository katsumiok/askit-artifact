// Recompilation count: 0
export function sophiaAndRoseWentTogether_9e4681({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number { 
    // Sophia and Rose went together to the market to buy onions and potatoes. Rose bought 'x1' times the number of onions and potatoes Sophia bought. If Rose bought 'x2' onions and 'x3' potatoes, how many onions and potatoes in total did Sophia buy at the market?
    // the total number of onions and potatoes that Sophia bought would be (number of onions Rose bought / x1) plus (number of potatoes Rose bought / x1)
    // therefore
    let totalOnionsAndPotatoesSophiaBought = (x2 / x1) + (x3 / x1);
    return totalOnionsAndPotatoesSophiaBought;
}
