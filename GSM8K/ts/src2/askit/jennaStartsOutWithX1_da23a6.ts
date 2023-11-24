// Recompilation count: 6
export function jennaStartsOutWithX1_da23a6({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Jenna starts out with 'x1' sapphires. She trades 'x2' sapphires for two rubies. 
    // If sapphires are worth $800 and rubies are worth $1200, 
    // how much money are all her jewels worth?

    const sapphireValue = 800;
    const rubyValue = 1200;

    // First, calculate how many sapphires Jenna has after trading
    let remainingSapphires = x1 - x2;

    // Then, calculate how many rubies Jenna has
    // Given the assumption that Jenna trades 'x2' sapphires for 2 rubies
    // This implies irrespective of the number of sapphires Jenna trades, she gets 2 rubies.
    let rubies = 2;

    // Now, we return the total worth of all Jenna's jewels
    return (remainingSapphires * sapphireValue) + (rubies * rubyValue);
}
