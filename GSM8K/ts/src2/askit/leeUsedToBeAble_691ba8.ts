// Recompilation count: 0
export function leeUsedToBeAble_691ba8({ x1 }: {
    x1: number;
}): number {
    // Gerald originally ran the 400-meter hurdles two seconds slower than Lee
    let geraldOriginalTime = x1 + 2;

    // Gerald's speed improved by 10%, so he now runs it in 90% of his original time
    let geraldImprovedTime = geraldOriginalTime * 0.9;

    return geraldImprovedTime;
}
