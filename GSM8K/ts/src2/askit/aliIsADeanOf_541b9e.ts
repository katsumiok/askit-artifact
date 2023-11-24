// Recompilation count: 0
export function aliIsADeanOf_541b9e({ x1 }: {
    x1: number;
}): number {
    // As per the problem, John's each class has 1/8 the capacity of Ali's class
    let johnsEachClassCapacity = x1 / 8;
    // And John has two classes, so total capacity in John's school
    let johnsTotalCapacity = johnsEachClassCapacity * 2;
    // Combined capacity of both schools would be 
    let combinedCapacity = x1 + johnsTotalCapacity;
    return combinedCapacity;
}
