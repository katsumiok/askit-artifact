// Recompilation count: 0
export function terriIsKnittingASweater_4046f5({ x1 }: {
    x1: number;
}): number {
    // Calculating stitches for collar
    let collarStitches = x1 / 10;
    
    // Calculating stitches for rosette
    let rosetteStitches = collarStitches * 2;

    // Subtracting stitches from total project stitches
    let remainingStitches = 1800 - x1 - collarStitches - rosetteStitches;

    // Dividing remaining stitches by 2 as there are 2 sleeves
    let sleeveStitches = remainingStitches / 2;

    return sleeveStitches;
}
