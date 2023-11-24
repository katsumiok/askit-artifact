// Recompilation count: 0
export function lastWeekTheIrsReceived_5f1fbc({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Last week the IRS received 'x1' tax reports. 
    // On Monday and Tuesday they received a total of 'x2' reports. Last week they received a total of 'x3' reports. 
    // How many reports did they receive on Wednesday?
    // The total reports of the week is 'x1'. Subtracting the amount received on Monday and Tuesday and Thursday and Friday
    // from the total week reports would give us the amount received on Wednesday.

    return x1 - x2 - x3;
}
