// Recompilation count: 3
export function deandreCaughtX1TunasLast_4e80aa({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // initialize total weight of tunas
    let totalWeight = 0;

    // check the number of tunas caught
    // assuming that if only x1 is provided, all tunas caught weigh the same  
    if (x1 === 1) {
        totalWeight = x2;
    } else if (x1 === 2) {
        totalWeight = x2 + x3;
    } else if (x1 >= 3) {
        totalWeight = x2 + x3 + x4; 
        if (x1 > 3) {
          totalWeight += (x1 - 3) * x4;  // if more than 3 tunas, assume remaining tunas weigh the same as the last known weight 
        }
    }

    // calculate and return the total earnings assuming $0.5 per kilogram
    return totalWeight * 0.5;
}
