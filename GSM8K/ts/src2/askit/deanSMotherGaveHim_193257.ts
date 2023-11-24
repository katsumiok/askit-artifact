// Recompilation count: 0
export function deanSMotherGaveHim_193257({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Dean's mother gave him $28 to go to the toy store. Dean bought 'x1' toy cars and 'x2' teddy bears. Each toy car cost $2 and each teddy bear cost $1. His mother then feels generous and decides to give him an extra $10. How much money does Dean have left?
        
        const totalMoney: number = 28 + 10; // Initial $28 and extra $10
        const totalSpent: number = (x1 * 2) + x2; // Total spent on toy cars and teddy bears
        const moneyLeft: number = totalMoney - totalSpent; // Calculation for money left

        return moneyLeft;
    }
