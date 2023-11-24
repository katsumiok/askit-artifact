// Recompilation count: 0
export function itIsApproximatX1Kilometers_90e718({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // It is approximately 'x1' kilometers from San Diego, California to New York City, New York. 
    // If Bernice drove 'x2' kilometers for 'x3' days, 
    // how many kilometers will she still need to drive?

    let totalDriven = x2 * x3; //Calculate total kilometers driven
    let remaining = x1 - totalDriven; //Calculate remaining kilometers

    return remaining; //Return remaining kilometers
}
