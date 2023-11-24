// Recompilation count: 0
export function jessicaMakes_2_000_00_35f203({}: {}): number {
    // Monthly income of Jessica
    const incomePerMonth = 2000.00; 

    // She sets 25% of her paycheck aside.
    const shoeBudgetPerMonth = incomePerMonth * 0.25;
    
    // The cost of each pair of shoes she buys
    const shoePrice = 1000.00; 

    // Shoes per month
    const shoesPerMonth = shoeBudgetPerMonth / shoePrice; 

    // How many shoes can she buy in a year?
    const shoesPerYear = shoesPerMonth * 12; 

    return Math.floor(shoesPerYear);
}
