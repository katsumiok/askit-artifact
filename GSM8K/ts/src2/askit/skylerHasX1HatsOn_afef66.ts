// Recompilation count: 0
export function skylerHasX1HatsOn_afef66({ x1 }: {
    x1: number;
}): number {
        // Skyler has 'x1' hats on his hand with the colors red, blue, and white.
        // Half of the hats are red, 3/5 of the remaining hats are blue, and the rest are white.
        // How many white hats does Skyler have?

    // calculate the number of red hats
    let redHats = x1 / 2;

    // calculate the remaining hats after removing red hats
    let remainingHats = x1 - redHats;

    // calculate the number of blue hats from the remaining hats
    let blueHats = (3 / 5) * remainingHats;

    // calculate the number of white hats by subtracting the number of blue hats from the remaining hats
    let whiteHats = remainingHats - blueHats;

    // return the number of white hats
    return whiteHats;
 }
