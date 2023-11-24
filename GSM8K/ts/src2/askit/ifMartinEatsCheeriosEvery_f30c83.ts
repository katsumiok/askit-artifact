// Recompilation count: 0
export function ifMartinEatsCheeriosEvery_f30c83({ x1 }: {
    x1: number;
}): number {
    // If Martin eats Cheerios every day for breakfast, he'll lose 1.25 pounds/week.
    let cheeriosLoss = 1.25 * x1;

    // If he eats donuts every day for breakfast, he'll gain 1.75 pounds/week.
    let donutsGain = 1.75 * x1;

    // Difference in his weight at the end of 'x1' weeks between the two breakfast options
    let weightDifference = donutsGain + cheeriosLoss;

    return weightDifference;
}
