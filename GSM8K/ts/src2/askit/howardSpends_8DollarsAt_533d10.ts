// Recompilation count: 0
export function howardSpends_8DollarsAt_533d10({ x1 }: {
    x1: number;
}): number {
    // Howard spends $8 dollars at the arcade on Monday. On Tuesday, he spends twice as much at the arcade as he did on Monday. On Wednesday, he spends 'x1' times as much at the arcade as he spent on Tuesday. If he originally had $100, how much money does he have left?
    let mondaySpending = 8;
    let tuesdaySpending = mondaySpending * 2;
    let wednesdaySpending = tuesdaySpending * x1;

    let totalSpending = mondaySpending + tuesdaySpending + wednesdaySpending;
    let remainingMoney = 100 - totalSpending;

    return remainingMoney;
}
