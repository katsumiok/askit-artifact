// Recompilation count: 0
export function ianHasABoardThat_95fb7c({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Ian has a board that is 'x1' feet long. He decides to make a cut so he can have two pieces. The longer piece is 'x2' times longer than the shorter piece. How long is the longer piece?

    // Let's denote the shorter piece as 's', then the longer piece is 'x2 * s'
    // Because the total length of the board is 'x1', we have: s + x2 * s = x1
    // Solving for 's', we get: s = x1 / (1 + x2)
    // And the length of the longer piece is 'x2 * s'

    let shorterPiece = x1 / (1 + x2);
    let longerPiece = x2 * shorterPiece;

    return longerPiece;
}
