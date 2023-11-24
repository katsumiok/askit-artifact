// Recompilation count: 0
export function aBoyHasX1Cards_ed6919({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // A boy has 'x1' cards. His brother has 'x2' fewer cards than he has. How many cards do they have together?
    return x1 + (x1 - x2);
}
