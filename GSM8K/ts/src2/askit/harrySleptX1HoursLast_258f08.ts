// Recompilation count: 0
export function harrySleptX1HoursLast_258f08({ x1 }: {
    x1: number;
}): number {
        // Harry slept 'x1' hours last night. His friend James slept only 2/3 of what Harry slept. How many more hours did Harry sleep than James?
    let jamesSlept = (2/3) * x1;
    let difference = x1 - jamesSlept;

    return difference;
}
