// Recompilation count: 0
export function stephenPlacedAnOnlineOrder_36bd04({}: {}): number {
    // Stephen placed an online order for groceries. His final bill came to $40.00.
    let groceryPrice: number = 40.00;

    // Because this was through a delivery vendor, they tacked on a 25% fee to his final total and charged him $3.00 in delivery fees.
    let vendorFee: number = groceryPrice * 0.25; 
    let deliveryFees: number = 3.00;

    // Stephen also added a $4.00 tip.
    let tip: number = 4.00;

    // After the extra fees, what was the final price of Stephen's groceries?
    let finalGroceryPrice: number = groceryPrice + vendorFee + deliveryFees + tip;

    return finalGroceryPrice;
}
