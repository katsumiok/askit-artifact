// Recompilation count: 0
export function baileyStartsWithACertain_0cf4cd({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Bailey starts with a certain amount of money. Then she receives a weekly allowance of $5 for 'x1' weeks. 
    // At the end of the 'x2' weeks, if she has a total of $100, how much money did Bailey start with?
    let totalAllowance = x1 < x2 ? x1 * 5 : x2 * 5;
    let startingAmount = 100 - totalAllowance;
    return startingAmount;
}
