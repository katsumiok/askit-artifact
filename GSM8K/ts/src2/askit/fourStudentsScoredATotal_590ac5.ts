// Recompilation count: 0
export function fourStudentsScoredATotal_590ac5({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Four students scored a total of 'x1' points in a board game. Naomi scored 'x2' of the points. Yuri scored 'x3' more than half as many points as Naomi and Brianna scored 'x4' points more than Naomi. How many points did Jojo score?

    const naomiPoints = x2;
    const yuriPoints = (naomiPoints / 2) + x3;
    const briannaPoints = naomiPoints + x4;
    
    // total points - points scored by Naomi, Yuri and Brianna
    const jojoPoints = x1 - (naomiPoints + yuriPoints + briannaPoints);
    
    return jojoPoints;
}
