// Recompilation count: 0
export function aTubOfIceCream_1bbaa0({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // A tub of ice cream costing $13 is now sold at $11. A packet of milk was sold at a discount of $0.5. How much will you save if you buy 'x1' tubs of ice cream and 'x2' packets of milk?
    const iceCreamSavings = (13 - 11) * x1;
    const milkSavings = 0.5 * x2;
    
    return iceCreamSavings + milkSavings;
}
