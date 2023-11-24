// Recompilation count: 0
export function garrettIsPoppingPopcornFor_ae94d8({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // calculate popped kernels for each period
    const firstPeriodPop = 20; 
    const secondPeriodPop = firstPeriodPop * 3; 
    const thirdPeriodPop = firstPeriodPop * 4; 
    const fourthPeriodPop = thirdPeriodPop / 2;
    const fifthPeriodPop = fourthPeriodPop / 4; 

    // total popcorns is sum of all periods pops
    const totalPop = firstPeriodPop + secondPeriodPop + thirdPeriodPop + fourthPeriodPop + fifthPeriodPop; 

    return totalPop;
}
