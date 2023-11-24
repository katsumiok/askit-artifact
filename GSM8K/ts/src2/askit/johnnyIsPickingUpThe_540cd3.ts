// Recompilation count: 5
export function johnnyIsPickingUpThe_540cd3({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        let totalPieces = x1; // first box
        totalPieces += x2 * x3; // second box which had 'x2' times more pieces than the 'x3' 
        totalPieces += 0.25 * x1; // third box that had 1/4 the number of pieces.  
        return totalPieces; // total Lego pieces Johnny picks up 
    }
