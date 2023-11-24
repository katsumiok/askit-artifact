// Recompilation count: 0
export function marcellAndBeatriceAreHaving_79c58c({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Calculating the total number of roll-ups Beatrice and Marcell ate
        let beatriceTotal = 2 * x1;
        let marcellTotal = x2 * x3;

        // Calculating the total roll-ups ate by both
        let totalRollUps = beatriceTotal + marcellTotal;

        // Calculating average roll-ups ate by both
        let averageRollUps = totalRollUps / 2;

        return averageRollUps;
    }
