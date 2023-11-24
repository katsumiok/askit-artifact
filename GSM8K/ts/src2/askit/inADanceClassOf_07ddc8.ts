// Recompilation count: 0
export function inADanceClassOf_07ddc8({ x1 }: { x1: number }): number {
    // Calculating percentage of students enrolled in contemporary dance
    const contemporary = x1 * 0.2;

    // Getting the number of students remaining
    const remaining = x1 - contemporary;

    // Calculating percentage of remaining students that enrolled in jazz dance
    const jazz = remaining * 0.25;

    // Getting the number of students remaining
    const remainingAfterJazz = remaining - jazz;

    // Calculate the percentage of the entire students that enrolled in hip-hop dance
    const hipHop = remainingAfterJazz / x1 * 100;

    return hipHop;
}
