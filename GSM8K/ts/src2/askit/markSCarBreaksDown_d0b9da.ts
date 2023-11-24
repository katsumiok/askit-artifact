// Recompilation count: 0
export function markSCarBreaksDown_d0b9da({ x1 }: {
    x1: number;
}): number {
    const radiatorCost = 400;
    const discount = 0.8;
    const reducedPrice = radiatorCost * (1 - discount);

    const mechanicHourlyRate = 50;
    const mechanicWorkCost = mechanicHourlyRate * x1;

    const totalCost = reducedPrice + mechanicWorkCost;

    return totalCost;
}
