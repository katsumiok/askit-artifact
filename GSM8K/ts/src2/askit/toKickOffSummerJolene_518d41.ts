// Recompilation count: 0
export function toKickOffSummerJolene_518d41({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // To kick off summer, Jolene is having a water balloon fight with her friends.  
    // They fill up 'x1' packs of balloons that have 'x2' balloons per pack.  
    // By the end of the afternoon, 'x3' balloons are left.  How many balloons did they throw?
    
    let totalBalloons = x1 * x2; // Balloons filled = packs of balloons * balloons per pack
    let thrownBalloons = totalBalloons - x3; // Thrown balloons = total balloons - balloons left
    return thrownBalloons;
}
