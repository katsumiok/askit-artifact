// Recompilation count: 0
export function ifX1PotatoesMakesX2_97fc28({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // If 'x1' potatoes makes 'x2' hash browns, how many hash browns can you make out of 'x3' potatoes?
    // ratio = x2 / x1
    // desired has browns = ratio * x3
    let ratio = x2 / x1;
    let desiredHashbrowns = ratio * x3;
    return desiredHashbrowns;
}
