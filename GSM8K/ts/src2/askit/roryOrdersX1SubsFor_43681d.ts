// Recompilation count: 0
export function roryOrdersX1SubsFor_43681d({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    const priceOfSubs = x1 * 7.50;
    const priceOfChips = x2 * 1.50;
    const priceOfCookies = x3 * 1.00;
    
    const subtotal = priceOfSubs + priceOfChips + priceOfCookies;
    const deliveryFee = subtotal * 0.20;
    const tip = 5.00;

    return subtotal + deliveryFee + tip;
}
