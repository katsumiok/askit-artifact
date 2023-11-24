// Recompilation count: 0
export function theRugIsX1Feet_095009({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // The rug is 'x1' feet wider than the chair. 
    let rugWidth = x1 + x3;

    // The couch is 'x2' feet longer than twice the width of the rug. 
    let couchLength = x2 + 2 * rugWidth;

    // return the length of the couch.
    return couchLength;
}
