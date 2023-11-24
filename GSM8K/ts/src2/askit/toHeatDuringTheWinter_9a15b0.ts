// Recompilation count: 0
export function toHeatDuringTheWinter_9a15b0({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // To heat during the winter, Ali ordered 'x1' kilos of coal. The coal is delivered in 'x2' kg bags, costing $18 per unit. How much does his order cost?
        let numberOfBags = Math.ceil(x1/x2); // Calculate number of bags needed, rounding up to whole number in case fractional amount is obtained
        let totalCost = numberOfBags * 18; // Calculate total cost by multiplying number of bags with cost per unit
        return totalCost;
}
