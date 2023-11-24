// Recompilation count: 0
export function jillGetsPaid_20Per_0e1c3b({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Jill gets paid $20 per hour to teach and $30 to be a cheerleading coach. If she works 'x1' weeks a year, 'x2' hours a week as a teacher and 'x3' hours a week as a coach, what's her annual salary?
        let teacherSalary: number = x1 * x2 * 20;
        let coachSalary: number = x1 * x3 * 30;
        return teacherSalary + coachSalary;
    }
