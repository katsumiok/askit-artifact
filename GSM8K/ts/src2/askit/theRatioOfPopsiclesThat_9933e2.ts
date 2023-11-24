// Recompilation count: 0
export function theRatioOfPopsiclesThat_9933e2({}: {}): number {
        // The ratio of popsicles that Betty and Sam have is 5:6. If the total number of popsicles they have together is 165, 
        // how many more popsicles does Sam have more than Betty?

        // let x be Betty's Popsicles.
        // 5x = Betty's Popsicles
        // 6x = Sam's Popsicles
        // 5x + 6x = 165 (total Popsicles)
        // 11x = 165
        let x = 165 / 11; // Betty and Sam's share per unit ratio

        // Number of popsicles that Sam has more than Betty
        return (6*x) - (5*x);
}
