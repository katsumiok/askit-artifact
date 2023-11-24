// Recompilation count: 0
export function alisaBikedX1MilesPer_146538({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Alisa biked 'x1' miles per hour for 4.5 hours. Stanley biked at 'x2' miles per hour for 2.5 hours. How many miles did Alisa and Stanley bike in total?
    const alisaDistance = x1 * 4.5; // Total distance biked by Alisa
    const stanleyDistance = x2 * 2.5; // Total distance biked by Stanley

    return alisaDistance + stanleyDistance; // Return total distance
}
