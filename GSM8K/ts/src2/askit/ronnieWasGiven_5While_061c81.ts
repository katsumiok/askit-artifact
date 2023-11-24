// Recompilation count: 0
export function ronnieWasGiven_5While_061c81({}: {}): number {
    // Ronnie was given $5 while Rissa was given thrice as much. After each of them had given an equal amount of money to their little sister, Rissa is left with 4/5 of her money. How much is left in Ronnie's money?

    // Ronnie was given $5
    let ronnieMoney: number = 5;

    // Rissa was given thrice as much, that is $15
    let rissaMoney: number = 15;

    // Rissa is left with 4/5 of her money, means she gave 1/5 of her money to their little sister:
    let rissaGivenAway: number = rissaMoney * 1/5;

    // Now, remove the given away sum from Ronnie's money
    let ronnieMoneyRemaining: number = ronnieMoney - rissaGivenAway;

    return ronnieMoneyRemaining;
}
