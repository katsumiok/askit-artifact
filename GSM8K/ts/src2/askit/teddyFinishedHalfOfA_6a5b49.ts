// Recompilation count: 0
export function teddyFinishedHalfOfA_6a5b49({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Teddy finished half of a 'x1' piece puzzle, and then started and finished another 'x2' piece puzzle within an hour.
    // So he placed half of x1 puzzle pieces which is x1 / 2, and then he placed all x2 puzzle pieces. 
    // We add these together to get the total puzzle pieces he placed
    return (x1 / 2) + x2;
}
