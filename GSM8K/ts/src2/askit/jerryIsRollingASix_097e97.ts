// Recompilation count: 0
export function jerryIsRollingASix_097e97({ x1 }: {
    x1: number;
}): number {
        // Jerry is rolling a six-sided die. How much more likely is it (expressed as a percentage) that he rolls a number greater than 'x1' than that he rolls two even numbers in a row?

        const totalDiceNumbers = 6;

        // Probability (expressed as a percentage) that he rolls a number greater than 'x1':
        const probabilityGreaterThanX1 = ((totalDiceNumbers - x1) / totalDiceNumbers ) * 100;

        // Probability (expressed as a percentage) that he rolls two even numbers in a row:
        const probabilityTwoEvenInARow = ((totalDiceNumbers / 2) / totalDiceNumbers) * ((totalDiceNumbers / 2) / totalDiceNumbers) * 100;

        // How much more likely is it (expressed as a percentage) that he rolls a number greater than 'x1' than that he rolls two even numbers in a row?
        const differenceInProbabilities = probabilityGreaterThanX1 - probabilityTwoEvenInARow;

        return differenceInProbabilities;
    }
