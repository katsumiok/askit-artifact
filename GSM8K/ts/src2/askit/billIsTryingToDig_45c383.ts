// Recompilation count: 0
export function billIsTryingToDig_45c383({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Bill is trying to dig a well in his backyard. He can dig 'x1' feet/hour through soil and half that fast through clay. If he has to dig through 'x2' feet of soil and 'x3' feet of clay, how long will it take him to dig the well?
    let timeForSoil = x2 / x1;
    let timeForClay = x3 / (x1 / 2);

    return timeForSoil + timeForClay;
}
