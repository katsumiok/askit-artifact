// Recompilation count: 0
export function deanHasX1MarblesHe_5cc489({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Dean has 'x1' marbles. He gives 1/5  of them to Jamie and gives 'x2' to Donald. How many marbles are left for Dean?
    let marblesToJamie = x1 / 5;
    let marblesLeft = x1 - marblesToJamie - x2;
    return marblesLeft;
}
