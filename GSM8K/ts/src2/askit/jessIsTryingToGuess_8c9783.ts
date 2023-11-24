// Recompilation count: 0
export function jessIsTryingToGuess_8c9783({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Jess is trying to guess the number of blue jellybeans in a jar. 
    // She can see that there are 'x1' green jelly beans and twice as many red jelly beans. 
    // The rest of the jellybeans are blue jelly beans. 
    // If there are a total of 'x2' jelly beans in total, how many blue jellybeans are there?

    // Calculate number of red jellybeans which is twice the number of green jellybeans
    let redJellybeans: number = 2 * x1;

    // Calculate number of blue jellybeans which is total jellybeans minus green and red jellybeans
    let blueJellybeans: number = x2 - (x1 + redJellybeans);

    // Return the number of blue jellybeans
    return blueJellybeans;
}
