// Recompilation count: 0
export function theBakersAtTheBeverly_15d794({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // The bakers at the Beverly Hills Bakery baked 'x1' loaves of bread on Monday morning. They sold 'x2' loaves in the morning and 'x3' loaves in the afternoon. A grocery store returned 'x4' unsold loaves. How many loaves of bread did they have left?
    let totalBaked = x1;
    let totalSold = x2 + x3;
    let totalReturned = x4;
    let remainingLoaves = totalBaked - totalSold + totalReturned;
    return remainingLoaves;
}
