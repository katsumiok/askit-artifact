// Recompilation count: 0
export function aWhirligigSpinsAtFive_638a98({ x1 }: {
    x1: number;
}): number {
    // A whirligig spins at five times the speed of a thingamabob. 
    // A whatchamacallit spins eleven times faster than a thingamabob. 
    // A whatchamacallit spins at 'x1' meters per second. 
    // How fast does a whirligig spin?

    // First, find out the speed of a thingamabob
    const thingamabobSpeed = x1 / 11;

    // Now find out the speed of a whirligig
    const whirligigSpeed = thingamabobSpeed * 5;

    return whirligigSpeed;
}
