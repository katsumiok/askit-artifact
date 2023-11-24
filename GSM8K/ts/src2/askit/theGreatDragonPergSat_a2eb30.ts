// Recompilation count: 0
export function theGreatDragonPergSat_a2eb30({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // The great dragon Perg's flame reach
    let pergDistance = x1;

    // Polly's throw distance with gemstone
    let pollyJavelinDistance = x2 * 3;

    // The distance outside the dragon's flame reach where Polly can still hit the dragon
    return pollyJavelinDistance - pergDistance;
}
