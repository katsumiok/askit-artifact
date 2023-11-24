// Recompilation count: 0
export function billySellsDvdsHeHas_fa3a9c({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // Billy sells DVDs. He has 'x1' customers on Tuesday. His first 'x2' customers buy one DVD each.  His next 'x3' customers buy 'x4' DVDs each.  His last 'x5' customers don't buy any DVDs.

    // calculate how many customers buy one DVD and how many buy multiple DVDs
    const customersBuyOne = Math.min(x1, x2);
    const customersBuyMultiple = Math.max(0, Math.min(x1 - x2, x3));

    // total DVDs sold is sum of DVDs sold to customers who buy one and those who buy multiple DVDs
    const totalDvdsSold = customersBuyOne + customersBuyMultiple * x4;

    // We do not need to subtract 'x5' from the total as customers who did not buy DVDs do not affect total DVDs sold
    return totalDvdsSold;
}
