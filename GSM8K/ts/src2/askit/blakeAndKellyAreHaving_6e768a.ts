// Recompilation count: 0
export function blakeAndKellyAreHaving_6e768a({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Blake runs 'x3' times back and forth on a football field that is 'x2' yards long.
    const blakeRun = x3 * x2 * 2;

    // Kelly runs back and forth once, which is 'x2' * 2 yards.
    // Then she runs to the 40-yard line and back 'x4' times, which is 40 * 2 * x4 yards.
    const kellyRun = x2 * 2 + 40 * 2 * x4;

    // The winner is the one who ran the most, and we return the difference.
    if (blakeRun > kellyRun) {
        return blakeRun - kellyRun;
    } else {
        return kellyRun - blakeRun;
    }
}
