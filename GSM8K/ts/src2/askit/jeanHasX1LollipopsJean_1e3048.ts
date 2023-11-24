// Recompilation count: 0
export function jeanHasX1LollipopsJean_1e3048({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Jean has 'x1' lollipops. Jean eats 'x2' of the lollipops. With the remaining lollipops, Jean wants to package 'x3' lollipops in one bag. How many bags can Jean fill?
    const remainingLollipops = x1 - x2;
    const filledBags = Math.floor(remainingLollipops / x3);
    
    return filledBags;
}
