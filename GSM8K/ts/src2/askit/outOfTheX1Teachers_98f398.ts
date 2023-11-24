// Recompilation count: 0
export function outOfTheX1Teachers_98f398({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Out of the 'x1' teachers on the school basketball court, 60% are history teachers. 
        const historyTeachers = x1 * 0.6;

        // If the rest of the teachers on the court are math teachers,
        const mathTeachers = x1 - historyTeachers;

        // and each teacher sleeps for 'x2' hours a day, calculate the total time the math teachers 
        // collectively spend sleeping in one day.
        const mathTeachersSleepTime = mathTeachers * x2;

        return mathTeachersSleepTime;
    }
