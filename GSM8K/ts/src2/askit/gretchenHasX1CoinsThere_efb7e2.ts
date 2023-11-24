// Recompilation count: 0
export function gretchenHasX1CoinsThere_efb7e2({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Gretchen has 'x1' coins. There are 'x2' more gold coins than silver coins. How many gold coins does Gretchen have?
    // As per the question, the total coins 'x1' is sum of gold and silver coins.
    // The difference between gold and silver coins is 'x2'.  

    // Let 'g' be the number of gold coins and 's' be the number of silver coins.
    // From the question, we have two equations:
    // g + s = x1 and g - s = x2.

    // Solving the above equations, we get: g = (x1 + x2)/2 and s = (x1 - x2)/2.
    // We are interested in the number of gold coins 'g'.

    // Therefore, return the value of 'g'.
    return (x1 + x2) / 2;
}
