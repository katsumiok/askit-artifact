// Recompilation count: 1
export function poppyIsSolvingA_1000_f81659({}: {}): number {
    // Total pieces of the jigsaw
    let totalPieces: number = 1000;

    // Poppy places a quarter of the pieces
    let poppyPlaced : number = totalPieces / 4;
    totalPieces -= poppyPlaced;

    // Her mom places a third of the remaining pieces
    let momPlaced: number = totalPieces / 3;
    totalPieces -= momPlaced;

    // Return the remaining pieces 
    return totalPieces;
}
