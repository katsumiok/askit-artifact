// Recompilation count: 0
export function twentyTouristsDiscoveredX1Shells_2c7b64({ x1 }: {
    x1: number;
}): number {
    // Twenty tourists discovered 'x1' shells in a strip mall parking lot. 
    // They had divided into three groups, Alphas, The finders, and Gogetters 
    // to find as many shells as possible. 
    // If team Alphas found 40% of the shells, 
    // and team The finders found 60% of the remaining shells,
    // how many shells did team Gogetters find?

    let alphasFind = 0.4 * x1;
    let remainingAfterAlphas = x1 - alphasFind;
    let theFindersFind = 0.6 * remainingAfterAlphas;
    let goGettersFind = remainingAfterAlphas - theFindersFind;

    return goGettersFind;
}
