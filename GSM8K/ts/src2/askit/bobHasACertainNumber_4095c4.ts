// Recompilation count: 0
export function bobHasACertainNumber_4095c4({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Bob has a certain number of marbles. If he receives 'x1' dozen more marbles, he will have 'x2' marbles.
    // If he loses 'x3' of the marbles he has, how many marbles will Bob have?
    
    let originalMarblesCount = x2 - (x1 * 12); // since x1 is in dozen, convert it to individual marbles by multiplying by 12
    let finalMarblesCount = originalMarblesCount - x3; // subtract x3 marbles from the original count

    return finalMarblesCount;
}
