// Recompilation count: 0
export function threeOfTheWomenAt_0bb780({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Three of the women at the cocktail party are wearing 'x1' inch heels and three are wearing 'x2' inch heels. What is the average height of heels at this party?
    const total = (3 * x1) + (3 * x2);
    return total / 6;
}
