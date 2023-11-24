// Recompilation count: 0
export function joeHas_50ToBuy_9f6ace({}: {}): number {
    // Initial amount Joe has
    const initialAmount = 50;

    // Cost of the shirt and the shorts
    const shirtPrice = 25;
    const shortsPrice = 35;

    // Calculate the total cost with the discount
    let totalCost = shirtPrice + shortsPrice;
    totalCost = totalCost - (totalCost * 0.30); //  30% off sale

    // Calculate how much joe will have left
    let remainingAmount = initialAmount - totalCost;

    return remainingAmount;
}
