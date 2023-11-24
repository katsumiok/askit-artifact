// Recompilation count: 0
export function hannahHasAMentalBreakdown_226adb({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Hannah has a mental breakdown while studying for finals and starts smashing windows
    // in the high school's parking lot. She smashes a quarter of the students' cars' windows
    // and 3/4ths of the teachers' cars' windows. If there are 'x1' students' cars with four 
    // windows each, and 'x2' teachers' cars' with two windows each, how many windows 
    // does Hannah smash?
    let studentWindows = x1 * 4; // Total students cars' windows
    let teacherWindows = x2 * 2; // Total teachers cars' windows
    // Hannah smashes a 1/4 of students windows and 3/4 of teachers windows
    let smashedStudentWindows = studentWindows * 0.25;
    let smashedTeacherWindows = teacherWindows * 0.75;

    return smashedStudentWindows + smashedTeacherWindows;
}
