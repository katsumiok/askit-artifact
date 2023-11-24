// Recompilation count: 0
export function findTheNThFibonacci_1e1c94({ n }: {
    n: number;
}): number {
    // Find the 'n'-th Fibonacci number.
    if (n === 0) return 0;
    if (n === 1) return 1;

    let fibMinus2 = 0;
    let fibMinus1 = 1;
    let fibN = 0;

    for (let i = 2; i <= n; i++) {
        fibN = fibMinus2 + fibMinus1;
        fibMinus2 = fibMinus1;
        fibMinus1 = fibN;
    }

    return fibN;
}
