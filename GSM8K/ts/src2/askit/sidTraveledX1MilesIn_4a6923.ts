// Recompilation count: 0
export function sidTraveledX1MilesIn_4a6923({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Sid traveled 'x1' miles in 'x2' hours. If Sid then traveled an additional 'x3' miles in 'x4' hours, what's the average speed he was traveling?
    // Total distance travelled is x1 + x3
    // Total time taken is x2 + x4
    // Average speed = Total distance travelled / Total time taken
    return (x1 + x3) / (x2 + x4);
}
