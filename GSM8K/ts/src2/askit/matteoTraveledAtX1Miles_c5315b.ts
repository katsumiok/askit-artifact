// Recompilation count: 0
export function matteoTraveledAtX1Miles_c5315b({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Matteo traveled at 'x1' miles per hour for 'x2' hours. Shandy traveled at 'x3' miles per hour for 'x4' hours. How many miles farther did Shandy drive than Matteo?

    let matteo_distance = x1 * x2;
    let shandy_distance = x3 * x4;
    return shandy_distance - matteo_distance;
}
