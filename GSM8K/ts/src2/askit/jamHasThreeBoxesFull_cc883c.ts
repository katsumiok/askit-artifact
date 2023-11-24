// Recompilation count: 1
export function jamHasThreeBoxesFull_cc883c({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Calculating pencils in one box
    let pencilsPerBox = (x2 - x1) / 3;

    // Total pencils Jam and Meg have
    let totalPencils = x2 + x3;

    // Boxes needed to store all pencils, round up to the nearest whole number 
    let totalBoxes = Math.ceil(totalPencils / pencilsPerBox);

    return totalBoxes;
}
