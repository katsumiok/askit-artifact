// Recompilation count: 0
export function thereAreThreeTreesIn_5364a3({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // The shortest tree has a height of 'x1' feet
    let shortestTreeHeight: number = x1;

    // the second tree has a height of 'x2' feet more than the shortest tree
    let secondTreeHeight: number = shortestTreeHeight + x2;

    // The height of the tallest tree is twice the height of the two trees combined
    let tallestTreeHeight: number = 2 * (shortestTreeHeight + secondTreeHeight);

    // return the height of the tallest tree
    return tallestTreeHeight;
}
