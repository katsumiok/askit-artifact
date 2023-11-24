// Recompilation count: 0
export function cedarFallsMiddleSchoolHas_9e4156({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
        // Cedar Falls Middle School has students in grades 'x1' – 'x2' and each year they are challenged to earn as many Accelerated Reader points as they can. 
        // The 'x3' students in each grade with the most points get to try an escape room set up by the teachers. 
        // Only 'x4' students can try the escape room at a time. 
        // They have 'x5' minutes to try and escape. 
        // If every group uses their full 'x6' minutes, how long will it take for everyone to try the escape room?

    let totalGrades = x2 - x1 + 1; // total grades in the school
    let totalStudents =  totalGrades * x3; // total students who get to try the escape room
    let totalGroups = Math.ceil(totalStudents / x4); // total groups of students
    let totalTime = totalGroups * x5; // total time needed if every group uses their full time

    return totalTime;
}
