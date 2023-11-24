// Recompilation count: 0
export function mayIsGettingHerHair_60246f({ x1 }: {
    x1: number;
}): number {
    // Determine the amount of hair that was cut by finding the difference between her starting length and her ending length.
    let cutLength = x1 - 8;

    // Calculate the cost of the haircut. This is $30 per inch.
    let haircutCost = cutLength * 30;

    // Add the cost of the color which is a flat $40 
    let totalCost = haircutCost + 40;

    // Return the total cost
    return totalCost;
}
