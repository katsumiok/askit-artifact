// Recompilation count: 0
export function ifJohnScoredX1On_221c6d({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // If John scored 'x1' on his first 'x2' tests and an 'x3' on his 4th, what was his average score across the 'x4' tests?
    let totalScore: number = (x1 * x2) + x3;
    return totalScore / x4;
}
