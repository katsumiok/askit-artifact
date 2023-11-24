// Recompilation count: 1
export function griffinHadX1FrenchFries_d51c8a({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Kyle took 'x2'
    // Billy took twice as many as Kyle
    let billyTook = 2 * x2;

    // Colby took from Griffin 'x3' less than the number of fries that Kyle had taken
    let colbyTook = x2 - x3;

    // If in the end Griffin had 'x4' fries,
    // That means:
    // x1 - x2 - billyTook - colbyTook + gingerGave = x4
    // So solving for gingerGave (number of fries Ginger gave Griffing) we get
    let gingerGave = x4 - x1 + x2 + billyTook + colbyTook;

    return gingerGave;
}
