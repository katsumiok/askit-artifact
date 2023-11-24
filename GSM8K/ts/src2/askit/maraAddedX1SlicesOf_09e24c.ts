// Recompilation count: 0
export function maraAddedX1SlicesOf_09e24c({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        
        let currentSlices = x1 + x2; // Mara added x1 slices to x2 slices already on plate 
        currentSlices *= 3; // She then tripled the number of slices 
        currentSlices -= x3; // Ate x3 slices
        currentSlices -= x4; // Her friend stole x4 slices
        
        return currentSlices; // Returning the remaining slices on the plate
}
