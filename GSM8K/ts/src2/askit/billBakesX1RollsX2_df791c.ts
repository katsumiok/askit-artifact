// Recompilation count: 0
export function billBakesX1RollsX2_df791c({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
        // Bill bakes 'x1' rolls, 'x2' chocolate croissants, and 'x3' baguettes every day. Each roll is 'x4' inches long, each croissant is 'x5' inches long, and each baguette is two feet long. If Bill puts all the baked goods end to end, how long will they be in feet?
    const totalLengthInInches = x1 * x4 + x2 * x5 + x3 * 24;

    const totalLengthInFeet = totalLengthInInches / 12;

    return totalLengthInFeet;
    }
