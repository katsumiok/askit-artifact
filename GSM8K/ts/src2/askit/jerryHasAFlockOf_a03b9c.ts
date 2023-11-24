// Recompilation count: 3
export function jerryHasAFlockOf_a03b9c({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Jerry has a flock of chickens. The red chickens produce 'x1' eggs a day, and the white chickens produce 'x2' eggs a day. 
    // Every day Jerry collects 'x3' eggs. If he has two more white chickens than red chickens, how many red chickens does he have?
    
    // Let's call the number of red chickens 'r'. The number of white chickens would then be 'r + 2'.
    // So we have the equation: r*x1 + (r+2)*x2 = X3 

    // From the equation, we solve for 'r':
    let r = (x3 - 2 * x2) / (x1 + x2);

    // Return the number of red chickens. We use Math.round to account for any rounding errors.
    return Math.round(r);
}
