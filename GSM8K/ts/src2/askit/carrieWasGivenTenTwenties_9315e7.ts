// Recompilation count: 0
export function carrieWasGivenTenTwenties_9315e7({ x1 }: {
    x1: number;
}): number {
    // Carrie was given ten twenties and 'x1' quarters by her aunt to use for lunch. 
    // If she spent all the quarters and 3/5 of the twenties, calculate the total amount of money she paid for the lunch.
    let twenties = 10 * 20;  // She was given 10 twenties which equals to $200
    let quarters = x1 * 0.25; // Each quarter is 0.25 

    let spentTwenties = (3/5) * twenties; // She spent 3/5 of the twenties
    let totalSpent = spentTwenties + quarters;  // Total amount spent is sum of spent twenties and all quarters

    return totalSpent;
}
