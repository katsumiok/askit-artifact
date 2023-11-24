// Recompilation count: 0
export function threeFriendsMikeJimAnd_776e51({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // initial points
    let Mike = x2;
    let Jim = x2 - x3;
    let Tony = x2 * x4;
    
    // extra points in the fourth round
    if (Mike > x5) Mike += 1;
    if (Jim > x5) Jim += 1;
    if (Tony > x5) Tony += 1;

    // total points
    let totalPoints = Mike + Jim + Tony;

    return totalPoints;
}
