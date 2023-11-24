// Recompilation count: 0
export function findTheGreatestCommonDivisor_3188e9({ a, b }: {
    a: number;
    b: number;
}): number {
    // Find the greatest common divisor of 'a' and 'b'.
    while (b !== 0) {
        let temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}
