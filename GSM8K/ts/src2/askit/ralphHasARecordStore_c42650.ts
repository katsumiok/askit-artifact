// Recompilation count: 1
export function ralphHasARecordStore_c42650({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // Ralph has a record store where people can trade their own records for new ones. People can trade 'x1' old records for 'x2' new one. 'x3' people come in with old records and leave with 'x4' new records between them. How many old records did the 'x5' people bring in?
    return x5 * (x4 * (x1/x2)) / x3;
}
