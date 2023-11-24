// Recompilation count: 0
export function ifTwoTrainsDepartFrom_49c623({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // If two trains depart from a station in opposite directions, 
    // and one train is traveling 'x1' miles an hour while the other is traveling half that distance per hour,
    // how far apart are they from each other after 'x2' hours?

    // First train travels 'x1' miles in an hour and second train travels 'x1/2' miles in an hour
    // In 'x2' hours, first train would have traveled 'x1 * x2' miles
    // And the second train would have traveled '(x1/2) * x2' miles
    // The total distance between them would be the sum of the distances each train traveled
    return x1 * x2 + (x1/2) * x2;
}
