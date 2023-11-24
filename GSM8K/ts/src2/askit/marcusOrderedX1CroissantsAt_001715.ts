// Recompilation count: 0
export function marcusOrderedX1CroissantsAt_001715({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // prices of items without discount
    let total = (x1 * 3.00) + (x2 * 2.50) + (x3 * 4.00) + (x4 * 1.00);
  
    // apply 10% discount
    total = total * 0.9;

    return total;
}
