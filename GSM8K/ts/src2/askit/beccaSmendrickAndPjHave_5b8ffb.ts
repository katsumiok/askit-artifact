// Recompilation count: 0
export function beccaSmendrickAndPjHave_5b8ffb({ x1, x2, x3 }: { x1: number; x2: number; x3: number; }): number {
    // Becca, Smendrick, and PJ have collections of Magic Cards.  There is a total of 'x1' cards.
    // Becca has 'x2' more than Smendrick, and Smendrick has 'x3' times the amount of cards that PJ has.
    // How many cards does Becca have?

    // As per question,
    // say, Becca = b, Smendrick = s, and PJ = p,
    // => b = s + x2 and s = x3 * p (where p, s and b are cards of PJ, Smendrick and Becca)

    // total x1 = cards of Becca + Smendrick + PJ
    // => x1 = b + s + p
    // synonym the b and s from the above relations
    // => x1 = (s + x2) + s + (s/x3)
    // simplifying further, we get the equation in terms of s
    // => s = (x1 - x2)/(2 + (1/x3))

    // find out the cards of Smendrick
    let s = (x1 - x2) / (2 + (1 / x3));
  
    // hence, the cards of Becca would be (Smendrick's cards + x2)
    let b = s + x2;

    return b;
}
