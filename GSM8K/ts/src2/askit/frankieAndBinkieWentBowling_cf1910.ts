// Recompilation count: 0
export function frankieAndBinkieWentBowling_cf1910({ x1 }: {
    x1: number;
}): number {
    // Frankie's score was 'x1' better more than twice as high as Binkie's. 
    // Given Binkie's score as 90, calculate Frankie's score.
    let binkieScore = 90;
    let frankieScore = 2 * binkieScore + x1;
  
    return frankieScore;
}
