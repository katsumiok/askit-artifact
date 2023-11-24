// Recompilation count: 0
export function johnPlansToSaveMoney_3ced2c({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // John plans to save money from working.  He gets paid $2 per hour and works 'x1' hours a day for 'x2' days a week.  If he wants to save $80 how many weeks will it take him?
    let totalMoneyPerWeek = x1 * x2 * 2; // total money he makes per week
    let weeksToSave80 = 80 / totalMoneyPerWeek; // total weeks it will take to save $80

    return weeksToSave80;
}
