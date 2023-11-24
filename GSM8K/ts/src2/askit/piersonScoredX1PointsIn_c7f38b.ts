// Recompilation count: 0
export function piersonScoredX1PointsIn_c7f38b({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Pierson scored 'x1' points in one game of bowling. Nikita scored 'x2' more than half as many as Pierson. How many points did Pierson and Nikita have in total?

    let piersonScore = x1;
    let nikitaScore = (x1 / 2) + x2;
 
    return piersonScore + nikitaScore;
}
