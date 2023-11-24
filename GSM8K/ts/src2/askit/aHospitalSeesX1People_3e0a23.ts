// Recompilation count: 0
export function aHospitalSeesX1People_3e0a23({ x1, x2 }: {
    x1: number;
    x2: number;
}): number { 
    // Calculate total hours hospital spends for the patients
    const totalHours = (x1 * x2) / 60;
    // Calculate total income and expense
    const totalIncome = totalHours * 200;
    const totalExpense = totalHours * 150;
    // Calculate and return profit
    const profit = totalIncome - totalExpense;
    return profit;
}
