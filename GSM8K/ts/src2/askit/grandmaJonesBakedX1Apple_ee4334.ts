// Recompilation count: 0
export function grandmaJonesBakedX1Apple_ee4334({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Grandma Jones baked 'x1' apple pies for the fireman's luncheon. 
    // She cut each pie into 'x2' pieces and set the five pies out on the buffet table for the guests to serve themselves.  
    // At the end of the evening, after the guests had taken and eaten their pieces of pie, there were 'x3' pieces of pie remaining.  
    // How many pieces were taken by the guests?

    let totalPieces = x1 * x2; // Total pieces of pies baked
    let piecesTaken = totalPieces - x3; // Pieces taken by the guests
    return piecesTaken;
}
