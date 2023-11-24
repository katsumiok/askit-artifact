// Recompilation count: 0
export function inASetOfMagicians_d4ab58({ x1 }: { x1: number }): number {
    // In a set of magicians cards, there are 'x1' red cards, and 60% more green cards. Yellow cards are as many, as the sum of red and green cards. How many cards of all mentioned colors are there?
    let greenCards: number = x1 + x1 * 0.60;
    let yellowCards: number = x1 + greenCards;

    return x1 + greenCards + yellowCards;
}
