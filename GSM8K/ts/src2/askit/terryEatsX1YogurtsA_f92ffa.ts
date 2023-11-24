// Recompilation count: 1
export function terryEatsX1YogurtsA_f92ffa({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Terry eats 'x1' yogurts a day.  They are currently on sale at 'x2' yogurts for $5.00.  How much does he spend on yogurt over 'x3' days?
    let totalYogurts = x1 * x3; //total yogurts Terry will eat in 'x3' days
    let neededPacks = Math.ceil(totalYogurts / x2); //how many packs he needs, rounding up to full pack
    let totalSpent = neededPacks * 5; //each pack costs $5
    return totalSpent;
}
