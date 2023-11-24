// Recompilation count: 0
export function jackieIsTryingToDecide_096f43({ x1 }: {
    x1: number;
}): number {
        // Jackie is trying to decide whether to do her taxes herself or hire an accountant. If she does the taxes herself, she'll be able to do 'x1' fewer hours of freelance work, losing $35/hour in missed income. The accountant charges $90. How much more money will she have if she hires the accountant?
        
        // calculate the income she will lose if she does the taxes herself, which is x1 hours * $35/hour
        let missedIncome: number = x1 * 35;
        
        // The accountant charges $90, so deduct this from her missed income. The remaining balance is the profit.
        let profit: number = missedIncome - 90;
        
        return profit;
    }
