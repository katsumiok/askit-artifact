// Recompilation count: 0
export function kellyHasX1QuartersAnd_40c18a({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Kelly has 'x1' quarters and 'x2' dimes. If she buys a can of pop for 'x3' cents, how many cents will she have left?
    const totalCents = x1 * 25 + x2 * 10; // convert quarters and dimes to cents
    const remainingCents = totalCents - x3; // subtract the cost of the can of pop 
    return remainingCents > 0 ? remainingCents : 0; // if she doesn't have enough money, return 0
}
