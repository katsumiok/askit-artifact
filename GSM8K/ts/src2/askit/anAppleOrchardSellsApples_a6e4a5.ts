// Recompilation count: 0
export function anAppleOrchardSellsApples_a6e4a5({ x1 }: {
    x1: number;
}): number {
        // An apple orchard sells apples in bags of 10. The orchard sold a total of 'x1' apples one day. How much did an orchard earn for selling this at $5 per bag?
    let numberOfBags = Math.ceil(x1 / 10); // Using Math.ceil to round up to the nearest whole bag if there are any leftover apples
    let earnings = numberOfBags * 5; // $5 per bag
    return earnings;
}
