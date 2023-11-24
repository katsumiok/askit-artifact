// Recompilation count: 0
export function codyAndTrevorHadX1_5d9a7d({ x1 }: {
    x1: number;
}): number {
    // Cody and Trevor had 'x1' sandwiches. Cody ate a third of the sandwiches, and Trevor ate a quarter of the sandwiches. How many sandwiches are left?
    let codyAte = x1 / 3;
    let trevorAte = x1 / 4;
    let sandwichesLeft = x1 - codyAte - trevorAte;
    return sandwichesLeft;
}
