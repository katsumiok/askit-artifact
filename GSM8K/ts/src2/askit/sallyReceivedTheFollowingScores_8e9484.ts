// Recompilation count: 0
export function sallyReceivedTheFollowingScores_8e9484({}: {}): number { 
    // Sally received the following scores on her math quizzes: 50, 80, 80, 60, 40, 90, 100, 70, and 60. Find her mean score.
    let scores = [50, 80, 80, 60, 40, 90, 100, 70, 60];
    let sum = scores.reduce((previous, current) => current += previous);
    let avg = sum / scores.length;
    return avg;
}
