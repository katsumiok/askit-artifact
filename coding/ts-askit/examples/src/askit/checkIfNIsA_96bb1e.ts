// Recompilation count: 0
export function checkIfNIsA_96bb1e({ n }: {
    n: number;
}): boolean {
    // Check if 'n' is a prime number.
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
