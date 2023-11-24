// Recompilation count: 7
export function janetIsCollectingTheResults_95d3a4({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // Standardize each grade's passing ratio to a value between 0 and 1.
    const thirdGradePassRate: number = x1 / x2;
    const fourthGradePassRate: number = x3 / x4;
    const fifthGradePassRate: number = 2 * fourthGradePassRate;

    // Assume x5 to be the total number of fifth graders, we find the count of passed fifth graders.
    const fifthGradePassed = fifthGradePassRate * x5;

    // Notice that since fifth grade is twice the pass rate, it can exceed total number of fifth graders or even more than 1. Ensuring it does not go beyond total students.
    const validFifthGradePassed = (fifthGradePassed > x5) ? x5 : fifthGradePassed; 

    // Calculate total students and total passes
    const totalStudents = x2 + x4 + x5;
    const totalPasses = x1 + x3 + validFifthGradePassed;

    // Calculate overall pass rate between 0 and 1 and then convert to percentage.
    const overallPassRate = (totalPasses / totalStudents) * 100;

    return overallPassRate;
 }
