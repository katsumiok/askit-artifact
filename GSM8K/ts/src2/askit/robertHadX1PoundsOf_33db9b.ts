// Recompilation count: 0
export function robertHadX1PoundsOf_33db9b({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Robert had 'x1' pounds of candy, Cindy had 'x2' pounds of candy, and Aaron had 'x3' pounds of candy after Halloween. If they decide to pool and share their candy equally with each other, how much candy would each of them have?
    let totalCandy: number = x1 + x2 + x3;
    let eachPersonCandy: number = totalCandy / 3;
    return eachPersonCandy;
}
