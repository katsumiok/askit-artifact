// Recompilation count: 0
export function julieOperatesTheCashRegister_0fcefb({ x1 }: {
    x1: number;
}): number {
        // Julie operates the cash register exactly twice as fast as her less-experienced colleague Jewel. 
        // Daily, Jewel processes 'x1' customers. 
        // What is the total weekly production for the two if they work all days of the week?

    // Jewel's daily work is 'x1'. Since she works 7 days, her weekly work is x1*7
    let jewelWeeklyTotal = x1*7;

    // Julie works twice as fast as Jewel. So, she processes 2*x1 customers daily
    // Since Julie also works 7 days, her weekly work is 2*x1*7
    let julieWeeklyTotal = 2*x1*7;

    //The total weekly production for the two is sum of Julie's weekly total and Jewel's weekly total.
    return julieWeeklyTotal + jewelWeeklyTotal;
}
