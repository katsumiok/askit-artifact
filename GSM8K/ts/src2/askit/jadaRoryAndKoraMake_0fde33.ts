// Recompilation count: 0
export function jadaRoryAndKoraMake_0fde33({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Kora made 'x2' dishes
    let koraDishes = x2;
    // Rory makes 'x1' more clay dishes than Kora
    let roryDishes = x1 + x2;
    // Jada makes twice as many clay dishes as Rory
    let jadaDishes = 2 * roryDishes;
    // They all make together
    let totalDishes = koraDishes + roryDishes + jadaDishes;

    return totalDishes;
}
