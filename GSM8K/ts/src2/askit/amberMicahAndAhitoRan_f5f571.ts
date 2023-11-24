// Recompilation count: 0
export function amberMicahAndAhitoRan_f5f571({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Amber, Micah, and Ahito ran 'x1' miles in total. Amber ran 'x2' miles. Micah ran 3.5 times what Amber ran. How many miles did Ahito run?
    let micahRan = x2 * 3.5;
    let ahitoRan = x1 - (x2 + micahRan);
    return ahitoRan;
}
