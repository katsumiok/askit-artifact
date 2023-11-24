// Recompilation count: 0
export function choHikedX1KilometersPer_07e81e({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Cho hiked 'x1' kilometers per hour for 'x2' hours.
        // Chloe hiked 'x3' kilometers per hour and stopped after 'x4' hours.
        // Calculate how many kilometers farther did Cho hike
    const choTotalDistance = x1 * x2;
    const chloeTotalDistance = x3 * x4;

    const difference = choTotalDistance - chloeTotalDistance;

    return difference;
}
