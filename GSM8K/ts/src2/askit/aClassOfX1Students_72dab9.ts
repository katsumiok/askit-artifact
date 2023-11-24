// Recompilation count: 0
export function aClassOfX1Students_72dab9({ x1, x2, x3 }: {
    x1: number; // total students
    x2: number; // students who like to bake
    x3: number; // students who like to play basketball
}): number {
    // 'x4' is the number of students who like to play video games
    // 'x5' is the number of students who like to play music
    // We know that: x1 = x2 + x3 + x4 + x5
    // And given condition: x5 = 2*x3
    // We need to find 'x4'
    
    // Replacing x5 in terms of x3 in the equation, we get:
    // x1 = x2 + x3 + x4 + 2*x3
    // Simplifying: x1 = x2 + 3*x3 + x4
    // Therefore: x4 = x1 - x2 - 3*x3

    let x4 = x1 - x2 - 3*x3;
    return x4;
}
