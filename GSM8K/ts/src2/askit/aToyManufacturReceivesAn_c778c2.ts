// Recompilation count: 6
export function aToyManufacturReceivesAn_c778c2({ x1, x2, x3, x4, x5, x6, x7 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
    x7: number;
}): number {
    // Calculate the number of toys produced by 'x3' workers
    let toysProducedByX3Workers = x3 * x4 * 10;
    // Calculate the number of toys produced by 'x5' workers
    let toysProducedByX5Workers = x5 * x6 * 10;
    // Calculate the number of remaining workers
    let remainingWorkers = x2 - (x3 + x5);
    // Calculate the number of toys that the remaining workers need to produce
    let toysToBeProduced = x1 - (toysProducedByX3Workers + toysProducedByX5Workers + x7);
    // Calculate how many toys per hour a remaining worker needs to produce
    let toysPerHour = toysToBeProduced / (10 * remainingWorkers);

    return toysPerHour;
}
