// Recompilation count: 0
export function aPencilCost_0_50_a86373({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // A pencil cost $0.50, and an eraser cost $0.25. If you bought 'x1' pencils and 'x2' erasers and paid $10, how much change would you get?
    
    const pencilCost: number = 0.50;
    const eraserCost: number = 0.25;
    const amountPaid: number = 10;

    const totalCost: number = (x1 * pencilCost) + (x2 * eraserCost);
    const change: number = amountPaid - totalCost;

    return change;
}
