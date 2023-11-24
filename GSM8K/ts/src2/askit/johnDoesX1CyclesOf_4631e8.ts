// Recompilation count: 0
export function johnDoesX1CyclesOf_4631e8({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // John does 'x1' cycles of work a day.  Each cycle has 'x2' different tasks and each task pays $1.20.  How much does he make if he works a full 'x3' day week?
    const taskPay = 1.20;
    const dailyIncome = x1 * x2 * taskPay;
    const weeklyIncome = dailyIncome * x3;

    return weeklyIncome;
}
