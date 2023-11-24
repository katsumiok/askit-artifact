// Recompilation count: 0
export function davosBoughtX1ShirtsFrom_834ff3({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Davos bought 'x1' shirts from the mall that cost $30 each. If he bought them with a 40% discount, how much did Davos pay for the 'x2' shirts?
        
    let shirtPrice: number = 30;
    let discount: number = 0.4; // 40% discount
    let discountedPrice: number = shirtPrice * (1 - discount); // price after discount
    let totalPrice: number = x2 * discountedPrice; // total price Davos paid

    return totalPrice;
}
