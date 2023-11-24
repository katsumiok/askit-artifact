// Recompilation count: 0
export function calculateTheFactorialOfN_3f5a74({ n }: {
    n: number;
}): number {
    // Calculate the factorial of 'n'.
    if (n === 0) {
        return 1;
    } else {
        return n * calculateTheFactorialOfN_3f5a74({ n: n - 1 });
    }
}
