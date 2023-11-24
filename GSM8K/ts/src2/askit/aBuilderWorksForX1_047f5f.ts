// Recompilation count: 0
export function aBuilderWorksForX1_047f5f({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // A builder works for 'x1' weeks every month and for 'x2' days every week. If he gets paid $50 every day, how much does he earn if he works for a year?
        let daysPerMonth = x1 * x2; // calculate total days per month
        let monthlyIncome = daysPerMonth * 50; // calculate total income per month
        let yearlyIncome = monthlyIncome * 12; // calculate total income per year

        return yearlyIncome;
    }
