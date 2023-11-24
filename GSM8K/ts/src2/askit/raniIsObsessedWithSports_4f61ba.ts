// Recompilation count: 0
export function raniIsObsessedWithSports_4f61ba({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // The speed of the 2nd fastest car
    let secondFastestCarSpeed = x1 * x2;
    
    // The speed of the fastest car was 1.25 times faster than the 2nd fastest car
    let fastestCarSpeed = 1.25 * secondFastestCarSpeed;

    return fastestCarSpeed;
}
