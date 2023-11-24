// Recompilation count: 4
export function inMrRoperSClass_a9cdc3({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // First, calculate the number of football players: 20% of 'x1'
    const footballPlayers = x1 * 0.20;

    // Calculate the remaining number of students after removing the football players
    const remainingStudents = x1 - footballPlayers;

    // Calculate the number of students who are cheerleaders or part of the band: 25% of the remaining students
    const cheerBand = remainingStudents * 0.25;

    // Calculate the total number of students leaving
    const totalStudentsLeaving = footballPlayers + cheerBand;

    // Check 'x2' against the number of groups of students leaving
    // If 'x2' is greater, return the total number of 'x2' groups of students multiplied by the number of students in each group
    // Otherwise, return totalStudentsLeaving
    return x2 > totalStudentsLeaving ? x2 * totalStudentsLeaving : totalStudentsLeaving;
}
