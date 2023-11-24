// Recompilation count: 0
export function robRoyceAndPedroAre_7f1a78({ x1 }: {
    x1: number;
}): number {
    // Rob, Royce, and Pedro are contractors getting ready to put a new roof on three homes. 
    // If the three homes will need 'x1' cases of shingles, with the first house needing 1/2 of the second, 
    // and the third needing double the first. How many cases of shingles will the third house need?

    // if the sum of the needs of the three houses is x1
    // first + second + third = x1
    // if the first house is needing 1/2 of the second (second = 2 * first)
    // and the third needing double the first (third = 2 * first)
    // therefore, 
    // first + 2 * first + 2 * first = x1
    // 5 * first = x1
    // so, first = x1 / 5
    // and third = 2 * first = 2 * (x1 / 5) = (2 * x1) / 5

    return (2 * x1) / 5;
}
