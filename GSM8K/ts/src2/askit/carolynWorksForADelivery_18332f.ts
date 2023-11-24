// Recompilation count: 1
export function carolynWorksForADelivery_18332f({ x1 }: { x1: number }): number {
    // The number of employees in June is 1/4 less than in May.
    let x2 = x1 - (x1 / 4);
    
    // Calculate monthly pay for one person as $15/h * 40h/week * 4weeks/month
    let monthlyPay = 15 * 40 * 4;

    // Total payment is a sum of payments in May and June
    let totalPay = (x1 * monthlyPay) + (x2 * monthlyPay);
    
    return totalPay;
}
