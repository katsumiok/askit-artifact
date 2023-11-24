// Recompilation count: 0
export function shielaBoughtFiveCellPhones_6b99cf({ x1 }: {
    x1: number;
}): number {
    // Shiela bought five cell phones for $150 each for a 3-month installment. A 2% interest will be charged for each unit. How much will Shiela pay each month for 'x1' months?
    
    // Calculate the total price for five cell phones
    const totalCellphoneCost = 5 * 150;

    // Calculate the 2% interest
    const interest = totalCellphoneCost * 0.02;

    // Add the interest to the initial price
    const totalCostWithInterest = totalCellphoneCost + interest;

    // Calculate the monthly payment
    const monthlyPayment = totalCostWithInterest / x1;

    return monthlyPayment;
}
