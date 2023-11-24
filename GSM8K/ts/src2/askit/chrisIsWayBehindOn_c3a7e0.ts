// Recompilation count: 0
export function chrisIsWayBehindOn_c3a7e0({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Chris is way behind on his math homework. He has 'x1' math problems to complete in total. 
    // He completes 'x2' problems on Monday night. 
    // On Tuesday, he completes 'x3' times as many problems as he did on Monday. 
    // On Wednesday, he completes one-quarter of the remaining math problems. 
    // How many math problems does he have left to complete on Thursday?

    // First, subtract the number of problems Chris completed on Monday from the total.
    let remainingProblems = x1 - x2;

    // On Tuesday, find the number of problems Chris completed and subtract it from the remaining problems
    let tuesdaysProblems = x2 * x3;
    remainingProblems -= tuesdaysProblems;

    // On Wednesday, Chris completes a quarter of the remaining problems, so subtract that from the remaining problems
    let wednesdaysProblems = remainingProblems / 4;
    remainingProblems -= wednesdaysProblems;

    // What remains is the number of problems that Chris has left to complete on Thursday
    return remainingProblems;
}
