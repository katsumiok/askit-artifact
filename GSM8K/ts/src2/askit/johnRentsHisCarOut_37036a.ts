// Recompilation count: 0
export function johnRentsHisCarOut_37036a({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // John rents his car out 'x1' times a month for 'x2' hours each time.  
    // He gets paid $25 an hour.  If his car payment is $500, how much profit does he make on his car?
    const earningsPerMonth = x1 * x2 * 25;
    const carPayment = 500;

    const profit = earningsPerMonth - carPayment;
    return profit;
}
