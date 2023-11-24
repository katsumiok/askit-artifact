// Recompilation count: 0
export function joeyHasX1PointsBefore_ca8c46({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Joey has 'x1' points before his turn in Scrabble. He scores 'x2' points.
    let joeysPoints: number = x1 + x2;

    // Then Marcy, who has 'x3' points, scores 'x4' points. 
    let marcysPoints: number = x3 + x4;

    // By how many points is Joey now winning?
    let difference: number = joeysPoints - marcysPoints;
    
    // If the difference is less than 0, Joey is not winning and hence return 0.
    return difference < 0 ? 0 : difference;
}
