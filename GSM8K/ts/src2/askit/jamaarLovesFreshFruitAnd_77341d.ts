// Recompilation count: 0
export function jamaarLovesFreshFruitAnd_77341d({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Jamaar loves fresh fruit and is headed to the store with $10 he earned mowing lawns. Including tax, peaches and pears are $.5 each, apples are $.75 each, kiwis are $1, and plums cost $.25 each. If he has already purchased 'x1' peaches, 'x2' pears, 'x3' kiwis, and 'x4' apples, how many plums can he buy?
    const totalSpent = (x1 * 0.5) + (x2 * 0.5) + (x3 * 1) + (x4 * 0.75);
    const remainingMoney = 10 - totalSpent;
    const plumsCanBuy = Math.floor(remainingMoney / 0.25);
    return plumsCanBuy;
}
