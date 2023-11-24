// Recompilation count: 0
export function findTheDifferenceBetweenXs_7cbe9b({ xs, ys }: {
    xs: string[];
    ys: string[];
}): string[] {
    // Find the difference between 'xs' and 'ys'.
    return xs.filter(x => !ys.includes(x));
}
