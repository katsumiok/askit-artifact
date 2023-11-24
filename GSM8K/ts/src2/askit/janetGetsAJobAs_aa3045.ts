// Recompilation count: 0
export function janetGetsAJobAs_aa3045({ x1 }: {
    x1: number;
}): number {
    // Janet earns $25 per hour (10 from wages and 15 from tips)
    let hourlyIncome = 10 + 15;
    // Cost of the car is $10000 and she wants to save 20% of it
    let carDownPayment = 10000 * 0.2;  
    // Determine how much Janet earns per week
    let weeklyIncome = hourlyIncome * x1;
    // Calculate how many weeks she needs to save up for the down payment
    let weeksToSave = carDownPayment / weeklyIncome;
    // Round up to the nearest whole number since you can't work a fraction of a week.
    return Math.ceil(weeksToSave);
}
