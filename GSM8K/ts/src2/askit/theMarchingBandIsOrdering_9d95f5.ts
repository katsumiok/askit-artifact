// Recompilation count: 0
export function theMarchingBandIsOrdering_9d95f5({}: {}): number {
    // Calculate the costs
    const hatCost: number = 25;
    const jacketCost: number = hatCost * 3;
    const pantsCost: number = (hatCost + jacketCost) / 2;

    // Calculate the total cost
    const totalCost: number = hatCost + jacketCost + pantsCost;

    return totalCost;
}
