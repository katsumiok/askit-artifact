// Recompilation count: 0
export function katyMakesCoffeeUsingTeaspoons_9dbd90({ x1 }: {
    x1: number;
}): number {
        // Katy makes coffee using teaspoons of sugar and cups of water in the ratio of 7:13. If she used a total of 'x1' teaspoons of sugar and cups of water, calculate the number of teaspoonfuls of sugar she used.
        let totalRatio = 7 + 13; // Total ratio of sugar and water
        let sugarRatio = 7; // Ratio of sugar

        // calculate the number of teaspoons of sugar she used
        return (x1 * sugarRatio) / totalRatio;
    }
