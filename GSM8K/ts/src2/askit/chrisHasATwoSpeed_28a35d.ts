// Recompilation count: 0
export function chrisHasATwoSpeed_28a35d({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Calculate the time taken in turtle mode for half lawn, converting it to minutes
    let turtleHalf = (x1 / 2) * 60;

    // Calculate the time taken in rabbit mode for half lawn
    let rabbitHalf = x2 / 2;

    // Total time taken is sum of both
    return turtleHalf + rabbitHalf;
}
