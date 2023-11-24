// Recompilation count: 0
export function findTheIntersectiOfXs_311048({ xs, ys }: {
    xs: number[];
    ys: number[];
}): number[] {
    // Find the intersection of 'xs' and 'ys'.
    return xs.filter(x => ys.includes(x));
}
