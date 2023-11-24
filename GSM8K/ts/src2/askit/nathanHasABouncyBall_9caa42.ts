// Recompilation count: 1
export function nathanHasABouncyBall_9caa42({ x1 }: {
    x1: number;
}): number {
    // Nathan has a bouncy ball that bounces to 2/3rds of its starting height with each bounce.
    // If he drops it from the third-floor balcony in the mall, where each story is 'x1' feet high, how high does the ball go on its second bounce?
    let initialHeight = 3 * x1;
    let firstBounceHeight = 2/3 * initialHeight;
    let secondBounceHeight = 2/3 * firstBounceHeight;
    return secondBounceHeight;  
}
