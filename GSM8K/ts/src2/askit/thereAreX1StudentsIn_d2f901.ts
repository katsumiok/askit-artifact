// Recompilation count: 0
export function thereAreX1StudentsIn_d2f901({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // There are 'x1' students in Miss Susan's class. 
    // 'x2' of them are good at math only, 
    // 'x3' of them perform well in English only, 
    // and the rest are good at both math and English. 
    // How many are good at math?

    const studentsGoodAtBothSubjects = x1 - x2 - x3;
    const studentsGoodAtMath = x2 + studentsGoodAtBothSubjects;

    return studentsGoodAtMath;
}
