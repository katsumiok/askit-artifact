// Recompilation count: 0
export function onAverageJoeThrowsX1_df1654({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // On average Joe throws 'x1' punches per minute.  A fight lasts 'x2' rounds of 'x3' minutes.  
    // So we multiply punches per minute (x1) with num of rounds (x2) and minutes per round (x3) to get total punches thrown
    return x1 * x2 * x3;
}
