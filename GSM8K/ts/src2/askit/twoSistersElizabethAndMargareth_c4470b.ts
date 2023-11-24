// Recompilation count: 0
export function twoSistersElizabethAndMargareth_c4470b({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // Two sisters, Elizabeth and Margareth, bought beads. Elizabeth bought 'x1' pack of red and 'x2' packs of clear beads, while Margareth bought 'x3' packs of blue and 'x4' packs of red beads. How many more beads do one sister have than the other, if each pack of beads contains 'x5' pieces of beads?

    // Elizabeth beads
    const elizabethBeads = (x1 + x2) * x5;

    // Margareth beads
    const margarethBeads = (x3 + x4) * x5;

    // return absolute difference between elizabethBeads and margarethBeads
    return Math.abs(elizabethBeads - margarethBeads);
}
