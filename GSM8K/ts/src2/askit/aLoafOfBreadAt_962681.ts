// Recompilation count: 0
export function aLoafOfBreadAt_962681({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // A loaf of bread at the bakery costs $2. Bagels cost $1 each. How much more do 'x1' loaves of bread cost than 'x2' bagels?
    let costOfBread = x1 * 2;
    let costOfBagels = x2 * 1;
    return costOfBread - costOfBagels;
}
