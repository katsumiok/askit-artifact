// Recompilation count: 0
export function markIsACopyEditor_26061c({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Mark is a copy-editor. He edits an equal number of sentences each week for two different publishers, who each pay him a different rate per sentence. Publisher B pays Mark twice what Publisher A pays. Mark edits a total number of 'x1' sentences each week, and Publisher A pays him 'x2' cents per sentence. How much does Mark make in a week, in cents?
    let sentencesForPublisherA = x1 / 2;
    let sentencesForPublisherB = x1 / 2;
    
    let paymentFromPublisherA = sentencesForPublisherA * x2;
    let paymentFromPublisherB = sentencesForPublisherB * (2 * x2);
    
    let totalPayment = paymentFromPublisherA + paymentFromPublisherB;
    return totalPayment;
}
