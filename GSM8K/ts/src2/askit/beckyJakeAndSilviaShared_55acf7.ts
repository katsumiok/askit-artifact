// Recompilation count: 0
export function beckyJakeAndSilviaShared_55acf7({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Total slices in all the pizzas
    let totalSlices: number = x1 * x2;

    // Becky ate 'x4' slices
    let beckySlices: number = x4;

    // Jake ate 'x3' less slices than Becky
    let jakeSlices: number = beckySlices - x3;

    // Silvia ate twice as many slices as Jake
    let silviaSlices: number = jakeSlices * 2;

    // Total slices they ate
    let totalEaten: number = beckySlices + jakeSlices + silviaSlices;

    return totalEaten;
}
