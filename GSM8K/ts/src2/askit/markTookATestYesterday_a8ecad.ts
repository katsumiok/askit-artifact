// Recompilation count: 0
export function markTookATestYesterday_a8ecad({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // Calculate questions completed in each test
    let questionsCompletedTest1 = x2 * x4;
    let questionsCompletedTest2 = x2 * x5;

    // Calculate how many questions Mark left incomplete
    let incompleteQuestions = (x1 + x3) - (questionsCompletedTest1 + questionsCompletedTest2);

    return incompleteQuestions;
}
