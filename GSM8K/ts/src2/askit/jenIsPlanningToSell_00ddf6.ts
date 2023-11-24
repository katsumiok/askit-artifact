// Recompilation count: 0
export function jenIsPlanningToSell_00ddf6({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Jen is planning to sell her root crops. She has 'x1' yams which can be sold at $1.5 each, 'x2' sweet potatoes that cost $2 each, and 'x3' carrots which cost $1.25 each. If she sells everything, how much will she earn?
    
    let yams = x1 * 1.5;    // price of yams
    let sweetPotatoes = x2 * 2;  // price of sweet potatoes
    let carrots = x3 * 1.25;  // price of carrots

    return yams + sweetPotatoes + carrots;
}
