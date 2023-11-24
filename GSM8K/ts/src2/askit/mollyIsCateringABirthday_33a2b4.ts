// Recompilation count: 0
export function mollyIsCateringABirthday_33a2b4({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Molly is catering a birthday party for her sister and invited 'x1' people. 'x2' people want the chicken salad which is $6.50 per person and 'x3' people want the pasta salad at $6 per person. What is the total amount Molly will pay for the catering?

    const chickenSaladPrice = 6.50;
    const pastaSaladPrice = 6.00;

    if (x1 < x2 + x3) {
        throw new Error('The total of chicken salad and pasta salad orders should not exceed the number of people invited.');
    }

    const totalChickenSaladPrice = x2 * chickenSaladPrice;
    const totalPastaSaladPrice = x3 * pastaSaladPrice;
    
    return totalChickenSaladPrice + totalPastaSaladPrice;
}
