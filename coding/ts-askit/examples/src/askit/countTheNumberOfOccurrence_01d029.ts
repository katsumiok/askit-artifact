// Recompilation count: 0
export function countTheNumberOfOccurrence_01d029({ x, xs }: {
    x: number;
    xs: number[];
}): number {
    // Count the number of occurrences of 'x' in 'xs'.
    return xs.filter(num => num === x).length;
}
