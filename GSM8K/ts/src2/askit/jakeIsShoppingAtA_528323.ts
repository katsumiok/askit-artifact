// Recompilation count: 1
export function jakeIsShoppingAtA_528323({ x1 }: {
    x1: number;
}): number {

    // Calculate the cost of t-shirts with discount
    let fullPriceShirts = Math.floor(x1 / 2);
    let discountedShirts = x1 - fullPriceShirts;
    let shirtsCost = fullPriceShirts * 8 + discountedShirts * 8 * 0.5;
    
    // Calculate the cost of shoes with discount
    let shoesCost = 40 * 0.6;

    // Return total spendings
    return shirtsCost + shoesCost;
}
