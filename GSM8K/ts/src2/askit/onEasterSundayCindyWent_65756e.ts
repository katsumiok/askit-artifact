// Recompilation count: 0
export function onEasterSundayCindyWent_65756e({ x1 }: {
    x1: number;
}): number {
    // She had 'x1' green ones, twice as many blue ones as green ones, 
    // one fewer pink eggs than blue eggs, 
    // and one-third as many yellow eggs as pink eggs.
    let greenEggs = x1;
    let blueEggs = 2 * x1;
    let pinkEggs = blueEggs - 1;
    let yellowEggs = pinkEggs / 3;

    // How many eggs did Cindy have altogether?
    let totalEggs = greenEggs + blueEggs + pinkEggs + yellowEggs;
    return totalEggs;
}
