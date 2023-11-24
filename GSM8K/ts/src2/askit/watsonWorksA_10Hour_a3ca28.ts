// Recompilation count: 0
export function watsonWorksA_10Hour_a3ca28({}: {}): number {
    // Since April has usually easily 4 weeks, Watson works 5 days a week.
    // Therefore, he works 20 days a month.
    const days = 20;
    
    // Watson makes $10 per hour and works 10 hours per day hence $10 * 10 = $100 per day
    const dailySalary = 10 * 10;
    
    // If he works for 20 days a month, his monthly salary becomes $100 * 20 days = $2000
    const monthlySalary = dailySalary * days;
    
    // Plus, since the company performed very well for the whole month,
    // he receives a weekly bonus of $300 for 4 weeks, $300 * 4 = $1200
    const bonus = 300 * 4;

    // Total earnings for the month of April (salary + bonus).
    const totalEarnings = monthlySalary + bonus;
    
    return totalEarnings;
}
