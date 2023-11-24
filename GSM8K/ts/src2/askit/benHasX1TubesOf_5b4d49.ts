// Recompilation count: 0
export function benHasX1TubesOf_5b4d49({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    
    // Jasper has half as many tubes of blue paint as Ben
    let jaspersBluePaint = x1 / 2;
    
    // and three times as many tubes of yellow paint as Ben
    let jaspersYellowPaint = x2 * 3;
    
    // Total tubes of paint Jasper has
    return jaspersBluePaint + jaspersYellowPaint; 
}
