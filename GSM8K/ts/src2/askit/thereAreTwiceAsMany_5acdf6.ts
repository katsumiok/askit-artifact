// Recompilation count: 0
export function thereAreTwiceAsMany_5acdf6({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // There are twice as many boys as girls at Dr. Wertz's school. If there are 'x1' girls and 'x2' students to every teacher,
    //  how many teachers are there?
    // First, we need to calculate the total number of students.
    // Since there are twice as many boys as there are girls, then the total number of students is 3*x1.
    let totalStudents = 3 * x1;
    
    // Then, we calculate the number of teachers by dividing the total number of students by the number of students per teacher (x2).
    let numberOfTeachers = totalStudents / x2;

    return numberOfTeachers;
}     
