// Recompilation count: 0
export function andyWorksInThePro_97da0d({ x1, x2, x3, x4, x5, x6, x7 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
    x7: number;
}): number {
    // First we calculate how many racquets Andy has restring with each type
    let syntheticGutRacquets = x2;
    let polyesterRacquets = x3;
    let hybridRacquets = x4;

    // Then we calculate how long it will take for each type
    let timeForSyntheticGut = syntheticGutRacquets * x5;
    let timeForPolyester = polyesterRacquets * x6;
    let timeForHybrid = hybridRacquets * x7;

    // Finally we add all the times to get the total time
    let totalTime = timeForSyntheticGut + timeForPolyester + timeForHybrid;

    return totalTime;
}
