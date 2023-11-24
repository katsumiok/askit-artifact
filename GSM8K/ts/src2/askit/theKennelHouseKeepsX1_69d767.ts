// Recompilation count: 0
export function theKennelHouseKeepsX1_69d767({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // The Kennel house keeps 'x1' German Shepherds and 'x2' Bulldogs. If a German Shepherd consumes 'x3' kilograms of dog food and a bulldog consumes 'x4' kilograms of dog food per day. How many kilograms of dog food will they need in a week?
    return ((x1 * x3) + (x2 * x4)) * 7;
}
