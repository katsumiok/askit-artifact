// Recompilation count: 9
export function millieDecidesToOpenA_e36cfa({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // calculate total cups millie can make
    let totalCups = x1 * x2;
    
    // calculate total income if all cups are sold
    let totalIncome = totalCups * 1;  // sells each cup for $1

    // calculate profit by subtracting cost of supplies from total income
    let profit = totalIncome - 18;  // spent $18 for supplies

    // calculate hourly profit
    let hourlyProfit = profit / (totalCups / x3);

    return hourlyProfit;
}
