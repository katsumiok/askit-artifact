// Recompilation count: 0
export function suzanneSoldX1CookiesFor_b66d74({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Suzanne sold 'x1' cookies for $1 each and 'x2' cupcakes for $4 each. She gave her two sisters $10 each for helping her. How much money does she have left from her earnings?
    const cookieEarnings = x1 * 1;
    const cupcakeEarnings = x2 * 4;
    const sisterHelpCost = 2 * 10;
    return cookieEarnings + cupcakeEarnings - sisterHelpCost;
}
