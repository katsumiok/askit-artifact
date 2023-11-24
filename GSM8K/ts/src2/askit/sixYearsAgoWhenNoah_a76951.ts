// Recompilation count: 0
export function sixYearsAgoWhenNoah_a76951({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Six years ago, when Noah was half as old as Cera, the population of Chile was half what it is now.
    // Currently, Cera is 'x1' years old.
    // If the population of Chile six years ago was 'x2' times the age of Noah, calculate the population of Chile now.

    // First, we need to find out Noah's age six years ago
    let ceraAgeSixYearsAgo = x1 - 6;
    let noahAgeSixYearsAgo = ceraAgeSixYearsAgo / 2;

    // Then, we can find out the population of Chile six years ago
    let chilePopulationSixYearsAgo = noahAgeSixYearsAgo * x2;

    // Now, since six years ago, the population of Chile was half what it is now, we can conclude that the current population is
    let currentChilePopulation = 2 * chilePopulationSixYearsAgo;
    
    return currentChilePopulation;
}
