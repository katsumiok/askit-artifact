// Recompilation count: 9
export function kimHasStartedHisOwn_76ae34({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Defining costs
    const bleachCost = 2;
    const clothsCost = 5;
    
    // Predicted clients
    const totalClients = x1 + x2;
    
    // Weekly income
    const incomePerWeek = 92;
    
    // Weekly expenses
    const totalBleachCost = totalClients * x3 * bleachCost;
    const totalClothsCost = totalClients * clothsCost;
    const totalExpenses = totalBleachCost + totalClothsCost;
    
    // Profit
    const profit = incomePerWeek - totalExpenses;
    
    return profit;
}
