// Recompilation count: 0
export function joeSBagOfHalloween_af9629({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Joe's bag of Halloween candy has 'x1' chocolate bars and 'x2' candied apples. Each chocolate bar weighs twice as much as each candied apple. If each chocolate bar weighs 40g, how much does Joe's bag of candy weigh, in grams?
        const chocolateBarWeight = 40;
        const candiedAppleWeight = chocolateBarWeight / 2;
        return x1 * chocolateBarWeight + x2 * candiedAppleWeight;
    }
