// Recompilation count: 0
export function richardWantsToMakeA_c8bc5f({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Richard wants to make a video to share online of him doing a science experiment that creates a fountain of diet soda after placing a specific branded candy inside it. Richard's driveway is 'x1' feet wide and he wants to put a bottle of soda every 'x2' feet of the driveway. After starting at the first bottle, it will take Richard 'x3' seconds to go from one soda bottle to the next, dropping the candy in. How many seconds total will it take Richard to set off all the soda fountains?
    let bottleCount = Math.floor(x1 / x2);
    let totalSeconds = (bottleCount - 1) * x3;
    return totalSeconds;
}
