// Recompilation count: 0
export function jennyIsDividingUpA_b9d7fa({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // calculate the slices given to Bill and Mark
    let slicesToBill = x1 * (1 / 3);
    let slicesToMark = x1 * (1 / 4);
    
    // calculate the remaining slices after Jenny ate 'x2' slices
    let slicesLeft = x1 - slicesToBill - slicesToMark - x2;
    
    return slicesLeft;
}
