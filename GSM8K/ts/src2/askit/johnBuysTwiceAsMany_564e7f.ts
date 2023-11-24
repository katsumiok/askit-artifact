// Recompilation count: 0
export function johnBuysTwiceAsMany_564e7f({}: {}): number {
    // John buys twice as many red ties as blue ties.  The red ties cost 50% more than blue ties.
    // He spent $200 on blue ties that cost $40 each. How much did he spend on ties?

    // First, figure out how many blue ties John bought.
    const costPerBlueTie: number = 40;
    const totalSpentOnBlueTies: number = 200;
    const numberOfBlueTies: number = totalSpentOnBlueTies / costPerBlueTie;

    // Since John buys twice as many red ties as blue ties, he bought:
    const numberOfRedTies: number = numberOfBlueTies * 2;

    // And since the red ties cost 50% more than blue ties, each red tie costs:
    const costPerRedTie: number = costPerBlueTie * 1.5;

    // So, the total amount John spent on red ties is:
    const totalSpentOnRedTies: number = numberOfRedTies * costPerRedTie;

    // Therefore, the total amount John spent on ties, both blue and red, is:
    return totalSpentOnBlueTies + totalSpentOnRedTies;
}
