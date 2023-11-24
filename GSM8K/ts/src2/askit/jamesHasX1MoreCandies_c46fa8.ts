// Recompilation count: 0
export function jamesHasX1MoreCandies_c46fa8({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // James has 'x1' more candies than Robert. John has twice as many candies as Robert. If John has 'x2' candies, how many more candies does John have than James?
    // If John has "x2" candies and John has twice the candies as Robert, then Robert has "x2 / 2" candies
    // If James has "x1" more candies than Robert, James has "x2 / 2 + x1" candies
    // Therefore, John has "x2 - (x2 / 2 + x1)" more candies than James
    return x2 - (x2 / 2 + x1);
}
