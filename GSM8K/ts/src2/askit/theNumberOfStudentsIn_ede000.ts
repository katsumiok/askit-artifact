// Recompilation count: 7
export function theNumberOfStudentsIn_ede000({ x1 }: {
    x1: number;
}): number {
    // The number of students in a school hall was 1000. The hall had 'x1' entrances A, B, and C which also served as the exits. If after a meeting 30% of the students went out of the building through exit A, 3/5 of the remaining went out through exit B, and the rest went out through exit C, calculate the number of students who went out through exit C.
    
    let totalStudents = 1000;
    let exitA = totalStudents * 0.3; 
    let remainingAfterA = totalStudents - exitA;
    let exitB = remainingAfterA * (3 / 5);
    let remainingAfterB = remainingAfterA - exitB;
    
    return remainingAfterB; 
}
