// Recompilation count: 0
export function toBePromotedToThe_9b8bfd({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // To be promoted to the next school year, Jane takes 'x1' tests that together must total at least 'x2' points. 
    // On her first test, Jane scored 'x3' points, on the second test she scored 'x4' points. 
    // What is the minimum number of points she must score on the third test to pass?
    
    let totalPointsOnFirstTwoTests = x3+x4; 
    let minimumPointsRequired = x2 - totalPointsOnFirstTwoTests;
    return minimumPointsRequired > 0 ? minimumPointsRequired : 0;
}
