// Recompilation count: 0
export function wayneAndBernadetteAreMovie_92fa91({ x1 }: {
    x1: number;
}): number {
    // Calculate Bernadette's drive time
    const bernadetteDriveTime = 4 * 4; // Wayne's time is 4 minutes, Bernadette's is 4 times that

    // Bernadette wants to arrive 'x1' minutes before Wayne
    // So, subtract the time Wayne needs to reach to the time Bernadette need to be there before Wayne
    const bernadetteLeaveTime = bernadetteDriveTime + x1;

    // Return the difference in time that Bernadette should leave before Wayne
    // which is calculated as the Bernadette's total time required minus Wayne's time required
    return bernadetteLeaveTime - 4;
}
