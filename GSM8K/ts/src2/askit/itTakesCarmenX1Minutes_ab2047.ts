// Recompilation count: 0
export function itTakesCarmenX1Minutes_ab2047({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // It takes Carmen 'x1' minutes to finish a crossword puzzle and 'x2' minutes to finish a sudoku puzzle.  
    // Over the weekend she solved 'x3' crossword puzzles and 'x4' sudoku puzzles.
    // How much time did she spend playing these games?

    // Time spent on crossword puzzles
    let timeCrossword = x1 * x3;

    // Time spent on sudoku puzzles
    let timeSudoku = x2 * x4;

    // Total time spent
    return timeCrossword + timeSudoku;
}
