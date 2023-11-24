// Recompilation count: 0
export function rayHadX1LollipopsHe_f39de4({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Ray had 'x1' lollipops. He kept 'x2' lollipops and shared the remaining equally with his four friends. How many lollipops did each of his friends receive?
    let remainingLollipops = x1 - x2;
    return remainingLollipops / 4;
}
