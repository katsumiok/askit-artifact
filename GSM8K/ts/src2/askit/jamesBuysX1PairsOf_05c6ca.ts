// Recompilation count: 0
export function jamesBuysX1PairsOf_05c6ca({ x1 }: { x1: number; }): number {
    // James buys 'x1' pairs of shoes a month.  He spends $2640 on shoes each year.  How much does he pay on average for each pair of shoes?
    const totalPairsPerYear = x1 * 12;
    const yearlyExpense = 2640;
    const averageCostPerPair = yearlyExpense / totalPairsPerYear;
    return averageCostPerPair;
}
