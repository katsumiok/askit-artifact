// Recompilation count: 0
export function aJellyfishTankHasNumerous_15bb0b({ x1 }: {
    x1: number;
}): number {
    // A fifth of the jellyfish are large and a third of them change color, 
    // that means 1/5 * 1/3 = 1/15 of the total jellyfish changes color when UV light turned on. 
    // If 'x1' jellyfish changed color, then total jellyfish count will be 15 * 'x1'.
    let totalJellyfish = 15 * x1;
    return totalJellyfish;
}
