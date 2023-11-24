// Recompilation count: 1
export function russellOrdersHisFavoriteBagels_178c04({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Russell orders his favorite bagels online.  Each pack of bagels costs $10.00 and has 'x1' bagels in the pack.  If he orders 'x2' packs of bagels, he will receive a 10% discount.  After ordering 'x3' bags, how much will each single bagel cost?

    // calculating the cost of bagels before discount
    let totalCost: number = (x3 * 10);

    // applying discount if he orders 'x2' or more packs
    if (x3 >= x2) {
        totalCost *= 0.9; // 10% discount
    }

    // total number of bagels he gets
    let totalBagels: number = x1 * x3;

    // returning the cost of a single bagel
    return totalCost / totalBagels;
}
