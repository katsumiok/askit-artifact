// Recompilation count: 0
export function mrsHarringtonBoughtX1Boxes_03c76f({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number{
    // Mrs. Harrington bought 'x1' boxes of oranges at the market. 
    let totalOranges = x1 * x3;

    // She gave her mom and her sister 'x2' boxes of oranges each. 
    let orangesGivenAway = x2 * x3 * 2;

    // Then she kept 1/4 of the oranges and sold the rest.
    let orangesKept = (totalOranges - orangesGivenAway) / 4;

    // How many oranges did Mrs. Harrington sell?
    let orangesSold = totalOranges - orangesGivenAway - orangesKept;

    return orangesSold;
}
