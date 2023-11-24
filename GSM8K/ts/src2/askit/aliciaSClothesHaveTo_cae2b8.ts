// Recompilation count: 0
export function aliciaSClothesHaveTo_cae2b8({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Calculate total cost per week
        const costPerWeek = x1 * 5 + x2 * 8 + x3 * 6;
        // Multiply weekly cost by the number of weeks
        const totalCost = costPerWeek * x4;
        // Return the total cost
        return totalCost;
}
