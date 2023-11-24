// Recompilation count: 1
export function brinleyIsInMrBert_36154d({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Scores are: 89, 71, 92, x1 and x2.
    // Initial total sum: 252 (89 + 71 + 92)
    const totalSum = 252 + x1 + x2;
    
    // Lowest score (minimum initial tests scores: 71).
    // In future if x1 or x2 or sixthScore is less than 71 then we can change the lowestScore.
    let lowestScore = 71; 

    if (x1 < lowestScore) {
        lowestScore = x1;
    } 
    
    if (x2 < lowestScore) {
        lowestScore = x2;
    }

    // Total sum excluding the lowest score.
    const sumWithoutLowestScore = totalSum - lowestScore;

    // Average each semester need to be 93.
    // For 6 tests (excluding lowest one), so for 5 tests need 465 points.
    const totalRequired = 93 * 5;
    
    // The score needed on the sixth test
    const sixthScore = totalRequired - sumWithoutLowestScore;

    if (sixthScore < lowestScore) {
        lowestScore = sixthScore;
    }

    return sixthScore;
}
