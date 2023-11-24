// Recompilation count: 0
export function somePeopleGotOnA_0820cf({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // totalPeopleHeadingToThirdStop - (peopleGotInFirstStop + peopleGotInSecondStop) + peopleGotDownAtSecondStop
    // x4 - (x1 + x3) + x2
    return x4 - (x1 + x3) + x2;
}
