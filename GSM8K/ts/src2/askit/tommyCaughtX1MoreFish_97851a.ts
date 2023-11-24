// Recompilation count: 0
export function tommyCaughtX1MoreFish_97851a({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Tommy caught 'x1' more fish than Darren and Darren caught 'x2' less than Naomi. If Naomi caught 'x3' fish, how many fish did Tommy catch?
    // Darren caught 'x2' less fish than Naomi, so Darren caught 'x3 - x2' fish
    // Tommy caught 'x1' more fish than Darren, so Tommy caught 'x1 + (x3 - x2)' fish
    return x1 + x3 - x2;
}
