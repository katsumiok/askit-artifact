// Recompilation count: 0
export function toulouseHasTwiceAsMany_24d3c7({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Toulouse has twice as many sheep as Charleston. 
    // Charleston has 'x1' times as many sheep as Seattle. 
    // How many sheep do Toulouse, Charleston, and Seattle have together if Seattle has 'x2' sheep?

    const seattle = x2;
    const charleston = seattle * x1;
    const toulouse = charleston * 2;

    // Total sheep
    const totalSheep = seattle + charleston + toulouse;

    return totalSheep;
}
