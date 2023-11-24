// Recompilation count: 0
export function aWatermelonFarmProducedX1_65968f({ x1 }: { x1: number; }): number {
    // Calculate 30% of the total baby watermelons, this is the first batch Ashlyn harvested
    let firstBatch = x1 * 0.3;
    // Calculate the remaining melons after the first harvest
    let remainingAfterFirstBatch = x1 - firstBatch;
    
    // Calculate 3/4 of the remaining melons, this is the second batch Ashlyn harvested
    let secondBatch = remainingAfterFirstBatch * (3/4);
    
    // Calculate and return the number of melons remaining after the second harvest
    return remainingAfterFirstBatch - secondBatch;
}
