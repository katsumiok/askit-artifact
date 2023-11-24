// Recompilation count: 0
export function paulHasX1MarblesHis_e41d0d({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Paul has 'x1' marbles. His friend gave him 'x2' marbles. Then, he lost 1/4 of his marbles. How many marbles does Paul have left?
    let totalMarbles = x1 + x2;
    let marblesLeft = totalMarbles - (totalMarbles * (1 / 4));
    return marblesLeft;
}
