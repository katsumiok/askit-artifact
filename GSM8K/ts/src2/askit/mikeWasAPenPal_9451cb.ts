// Recompilation count: 0
export function mikeWasAPenPal_9451cb({ x1, x2, x3, x4, x5 }: {
    x1:number;
    x2:number;
    x3:number;
    x4:number;
    x5:number;
}): number {
    // Determine the number of remaining penpals
    let remainingPenpals: number = x1 - x2;
    
    // Determine the total number of pages he needs to write in a week
    let totalPages: number = remainingPenpals * x3 * x4;

    // Calculate the total time he spends writing
    let totalTime: number = (totalPages * x5) / 60; // converting minutes to hours

    return totalTime;
}
