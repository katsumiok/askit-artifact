// Recompilation count: 0
export function aPenCostsAsMuch_7e6472({ x1 }: {
    x1: number;
}): number {
    // A pen costs as much as a pencil and eraser combined. A pencil costs $1.20 and an eraser costs $0.30. How much will 'x1' pens cost?
    const pencilCost = 1.20;
    const eraserCost = 0.30;
    const penCost = pencilCost + eraserCost;

    return x1 * penCost;
}
