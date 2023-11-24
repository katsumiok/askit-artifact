// Recompilation count: 1
export function aPinkFrogWeighsThe_a5caf7({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Define the weights based on the description.
    let pinkFrog = x3;
    let blueBeetle = x3;
    let greenToad = x3;
    let yellowSnake = x3 + x1;
    let redBird = x3 - x2;

    // Calculate the total weight.
    let totalWeight = pinkFrog + blueBeetle + greenToad + yellowSnake + redBird + x4;

    return totalWeight;
}
