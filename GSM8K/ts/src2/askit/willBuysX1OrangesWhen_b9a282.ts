// Recompilation count: 0
export function willBuysX1OrangesWhen_b9a282({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    const oldestSon = x3;
    const youngestSon = oldestSon / 2;
    
    // Both sons wash as many oranges as they are years old
    const orangesWashed = oldestSon + youngestSon;

    // The number of oranges left unwashed is the total number of oranges bought 
    // minus the oranges washed by the sons
    const orangesLeft = x1 - orangesWashed;

    return orangesLeft;
}
