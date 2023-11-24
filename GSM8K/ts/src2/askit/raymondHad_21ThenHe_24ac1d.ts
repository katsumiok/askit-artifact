// Recompilation count: 0
export function raymondHad_21ThenHe_24ac1d({}: {}): number {
    // Raymond had $21. Then he saved $11 from his allowance and spent $5 on a comic book and $19 on a puzzle. How much money does Raymond have left?
    let initialAmount = 21;
    let savedAmount = 11;
    let comicBookPrice = 5;
    let puzzlePrice = 19;

    let remainingAmount = initialAmount + savedAmount - comicBookPrice - puzzlePrice;

    return remainingAmount;
}
