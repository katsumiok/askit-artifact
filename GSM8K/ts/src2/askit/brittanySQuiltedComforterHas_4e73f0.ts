// Recompilation count: 0
export function brittanySQuiltedComforterHas_4e73f0({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Brittany's quilted comforter has many 1-foot by 1-foot colored squares. The comforter had 'x1' red squares, 'x2' more blue squares than red squares, 'x3' more green squares than blue squares, and 'x4' fewer white squares than green squares.  How many square feet is Brittany's comforter?
        let blueSquares = x1 + x2;
        let greenSquares = blueSquares + x3;
        let whiteSquares = greenSquares - x4;

        return x1 + blueSquares + greenSquares + whiteSquares;
    }
