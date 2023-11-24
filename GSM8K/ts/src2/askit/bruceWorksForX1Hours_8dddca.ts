// Recompilation count: 0
export function bruceWorksForX1Hours_8dddca({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Bruce works for 'x1' hours on Tuesday. 
    // On Wednesday he works twice the time he works on Tuesday. 
    // On Thursday he works 'x2' hours less than the time he works on Wednesday. 
    // How many hours does Bruce work in all these three days?

    let wednesdayHours = 2 * x1;
    let thursdayHours = wednesdayHours - x2;

    let totalHours = x1 + wednesdayHours + thursdayHours;

    return totalHours;
}
