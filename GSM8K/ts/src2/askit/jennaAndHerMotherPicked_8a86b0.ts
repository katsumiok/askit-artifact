// Recompilation count: 0
export function jennaAndHerMotherPicked_8a86b0({ x1 }: {
    x1: number;
}): number {
        // Jenna picked half as many apples as her mom. If her mom got 'x1' apples, how many apples did they both pick?
        // Jenna picked half of x1, so we multiply x1 by 0.5 to get Jenna's number of apples
        let jennaApples = x1 * 0.5;
        
        // Both picked is sum of Jenna's apples and her mom's apples
        let totalApples = jennaApples + x1;

        return totalApples;
}
