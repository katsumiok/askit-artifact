// Recompilation count: 0
export function guntherTheGorillaHadX1_84626e({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // start with 'x1' bananas, lose half to Arnold
    let total = x1 / 2;

    // add 'x2' bananas, then lose 'x3'
    total = (total + x2) - x3;

    // add 'x4' bananas
    total += x4;

    // return the total
    return total;
}
