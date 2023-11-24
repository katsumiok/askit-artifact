// Recompilation count: 0
export function togetherLilyDavidAndBodhi_fb45ee({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Together Lily, David, and Bodhi collected 'x1' insects. Lily found 'x2' more than David. David found half of what Bodhi found. How many insects did Lily find?
    // Let's say David found 'd' insects and Bodhi found 'b' insects
    // According to the problem:
    // 1) Lily found 'd' + 'x2' insects (where 'x2' is the number of more insects Lily found than David)
    // 2) David found half of what Bodhi found, which means 'b' = 2*'d'
    // 3) Together they found 'x1' insects, which means 'd' + 'd' + 'x2' + 'b' = 'x1' -> substituting 'b' we get 4*d + x2 = x1
    // From this we can find 'd'. Then we substitute 'd' into equation 1) to find the number of insects Lily found.

    const d = (x1 - x2) / 4;
    const lilyInsects = d + x2;

    return lilyInsects;
}
