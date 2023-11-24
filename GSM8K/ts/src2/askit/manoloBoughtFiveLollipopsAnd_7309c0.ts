// Recompilation count: 1
export function manoloBoughtFiveLollipopsAnd_7309c0({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Manolo bought five lollipops and four candies that cost $3.20. If each lollipop costs $0.40, how much will 'x1' lollipops and 'x2' candies cost him?
        const lollipopPrice = 0.40;
        const candyPrice  = (3.20 - (5 * lollipopPrice)) / 4;
        return (x1 * lollipopPrice) + (x2 * candyPrice);
    }
