// Recompilation count: 0
export function thereAreX1StudentsPlaying_6d13cd({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // There are 'x1' students playing tennis and twice that number playing volleyball. There are 'x2' boys and 'x3' girls playing soccer. If each student only participates in one group, how many students are there in total?
    let tennisStudents = x1;
    let volleyballStudents = 2 * x1;
    let soccerStudents = x2 + x3;

    return tennisStudents + volleyballStudents + soccerStudents;
    }
