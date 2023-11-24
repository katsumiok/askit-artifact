// Recompilation count: 0
export function aBusTravelsX1Miles_7231fa({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // A bus travels 'x1' miles per hour for 'x2' hours. A car travels 'x3' miles per hour for 'x4' hours.
    // So, the distance covered by bus is x1 * x2
    let busDistance = x1 * x2;

    // The distance covered by car is x3 * x4
    let carDistance = x3 * x4;

    // Return how much farther the bus travelled than the car
    // If the bus travelled less or equal distance than the car, return 0
    return busDistance > carDistance ? busDistance - carDistance : 0;
}
