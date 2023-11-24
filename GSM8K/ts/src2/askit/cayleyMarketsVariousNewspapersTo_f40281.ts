// Recompilation count: 0
export function cayleyMarketsVariousNewspapersTo_f40281({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    const nyTimesCommissionRate = 0.10;
    const wsJournalCommissionRate = 0.08;
    const nyTimesCost = 5;
    const wsJournalCost = 15;

    const totalCommission = (x1 * nyTimesCost * nyTimesCommissionRate) + (x2 * wsJournalCost * wsJournalCommissionRate);
  
    return totalCommission;
}
