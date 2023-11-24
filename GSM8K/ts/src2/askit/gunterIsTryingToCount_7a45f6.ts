// Recompilation count: 0
export function gunterIsTryingToCount_7a45f6({ x1 }: {
    x1: number;
}): number {
    // Gunter is trying to count the jelly beans in a jar. 
    // He asks his friends how many they think are in the jar. 
    // One says 80. Another says 'x1' more than half the first one.
    // A third says 25% more than the first one. 
    // What is their average guess?

    const firstGuess = 80;
    const secondGuess = firstGuess / 2 + x1;
    const thirdGuess = firstGuess + (firstGuess * 0.25);
    
    const averageGuess = (firstGuess + secondGuess + thirdGuess) / 3;
    
    return averageGuess;
}
