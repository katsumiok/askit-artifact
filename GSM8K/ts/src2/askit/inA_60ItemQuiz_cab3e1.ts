// Recompilation count: 0
export function inA_60ItemQuiz_cab3e1({}: {}): number {
    // calculate the number of easy, average and difficult questions
    const totalItems = 60;
    const easy = totalItems * 0.4; 
    const average_difficult = (totalItems - easy) / 2;

    // calculate the scores
    const easy_score = easy * 0.75; 
    const average_difficult_score = average_difficult * 0.5 * 2; // multiply by 2 since it includes both the average and difficult questions

    // return the total score
    return easy_score + average_difficult_score;
}
