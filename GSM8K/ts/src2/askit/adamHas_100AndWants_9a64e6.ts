// Recompilation count: 0
export function adamHas_100AndWants_9a64e6({}: {}): number {
    // Initial amount
    let adamMoney = 100;

    // Price of a rock
    let rockBuyPrice = 5;
    let rockSellPrice = 7;

    // How many rocks can Adam buy
    let rocks = Math.floor(adamMoney / rockBuyPrice);

    // How many rocks does Adam sell (60%)
    let rocksSold = rocks * 0.6;

    // How much money does Adam get from selling rocks
    let soldMoney = rocksSold * rockSellPrice;

    // How much money Adam loses
    // We round the value since addressing money with fractions of cents doesn't make sense
    let moneyLost = Math.round(adamMoney - soldMoney);

    return moneyLost;
}
