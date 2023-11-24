// Recompilation count: 0
export function nancyIsReturningHerOverdue_7f1154({ x1 }: {
    x1: number;
}): number {
    // Nancy is returning her overdue books to the library. She owes $0.50 cents each on 'x1' books, plus a flat $2.00 fee for having at least one book that's over a week overdue. How much does she have to pay total?
    const overDueChargePerBook = 0.50;
    const overDueChargeFlatFee = 2.00;
    return (x1 * overDueChargePerBook) + overDueChargeFlatFee;
}
