// Recompilation count: 0
export function geraldWorksAtADaycare_7bcbfd({}: {}): number {
    // Gerald works at a daycare that pays him $30 every day. He worked for an entire week and spent a total of $100. How much does he have left?
    const dailyPay = 30;
    const daysWorked = 7;
    const totalSpent = 100;

    // calculate total earned
    let totalEarned = dailyPay * daysWorked;
    // calculate and return how much he has left
    return totalEarned - totalSpent;  
}
