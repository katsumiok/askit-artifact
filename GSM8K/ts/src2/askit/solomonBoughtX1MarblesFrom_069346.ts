// Recompilation count: 0
export function solomonBoughtX1MarblesFrom_069346({ x1 }: {
    x1: number;
}): number { 
    // Solomon bought 'x1' marbles from his friend Johanna and added them to a store that had 50. 
    let totalMarbles = 50 + x1;

    // If his father also gave him 2/5 times as many marbles as he bought from Johanna
    let marblesFromFather = (2/5) * x1;
    totalMarbles += marblesFromFather;

    // and each marble weighs 2kgs, calculate the total weight of marbles Solomon has in the store.
    let totalWeight = totalMarbles * 2;

    return totalWeight;
}
