// Recompilation count: 0
export function darrenDecidesToDoBody_a0ba3e({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Darren decides to do body exercises for a whole week.
    // He does 'x1' pushups, 'x2' squats, and 'x3' dumbbell presses on the first day.
    // On the second day, he does 'x4' more pushups than on the first day, 
    // ten fewer squats, and doubles the number of dumbbell presses.
    // What's the total count of the activities he's done in the two days?

    const firstDay = x1 + x2 + x3;
    const secondDay = x1 + x4 + (x2 - 10) + (x3 * 2);
    return firstDay + secondDay;
}

