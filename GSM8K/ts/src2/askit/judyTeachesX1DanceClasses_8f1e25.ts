// Recompilation count: 0
export function judyTeachesX1DanceClasses_8f1e25({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Judy teaches 'x1' dance classes, every day, on the weekdays and 'x2' classes on Saturday.  
    // If each class has 'x3' students and she charges $15.00 per student, 
    // how much money does she make in 'x4' week?

    // Determine the number of classes per week.
    let classesPerWeek = (x1 * 5) + x2;
    
    // Determine how many students Judy teaches per week.
    let studentsPerWeek = classesPerWeek * x3;

    // Determine the money Judy makes per week
    let moneyPerWeek = studentsPerWeek * 15;

    // Determine the money Judy makes in 'x4' weeks
    let totalMoney = moneyPerWeek * x4;

    return totalMoney;
}
