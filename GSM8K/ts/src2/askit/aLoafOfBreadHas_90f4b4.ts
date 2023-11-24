// Recompilation count: 0
export function aLoafOfBreadHas_90f4b4({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // A loaf of bread has 'x1' slices. If Abby can eat 'x2' slices a day while Josh can eat twice as much, so total slices eaten in a day are 'x2' + 2*'x2'
    let totalSlicesEatenInADay = x2 + (2*x2);
    // Calculate the number of days the loaf of bread will last by dividing total slices by total slices eaten in a day.
    let result = x1 / totalSlicesEatenInADay;
    return result;
}
