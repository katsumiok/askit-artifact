// Recompilation count: 0
export function ifMarkWeighsX1Pounds_3a5eb0({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // If Mark weighs 'x1' pounds and Susan weighs 'x2' pounds less than Mark.  And their friend Bob weighs twice as much as Susan.  What is the average weight of the 'x3' friends?
    let markWeight: number = x1;
    let susanWeight: number = markWeight - x2;
    let bobWeight: number = 2 * susanWeight;
    let totalWeight: number = markWeight + susanWeight + bobWeight;
    
    let averageWeight: number = totalWeight / x3;

    return averageWeight;
}
