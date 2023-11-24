// Recompilation count: 0
export function onACertainDayThe_95bb27({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // On a certain day, the total cost of filling up 'x1' helium balloons was $900. 
    // Two days later, the cost of filling each balloon was increased by $20. 
    //How much did Bentley pay to fill 'x2' balloons if he went to fill them after the price increase?

    let costPerBalloonBeforeIncrease = 900 / x1;
    let costPerBalloonAfterIncrease = costPerBalloonBeforeIncrease + 20;
    let totalCostAfterIncrease = costPerBalloonAfterIncrease * x2;

    return totalCostAfterIncrease;
}
