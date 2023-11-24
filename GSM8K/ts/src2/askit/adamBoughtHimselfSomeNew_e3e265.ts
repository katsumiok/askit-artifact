// Recompilation count: 0
export function adamBoughtHimselfSomeNew_e3e265({}: {}): number {
    // Adam bought himself some new trousers for $30. His mother gave him $6 for this purpose, and his father gave him twice as much. How much money did Adam have to contribute from his savings?

    const trousersCost = 30;
    const mothersContribution = 6;
    const fathersContribution = mothersContribution * 2;
    const totalContribution = mothersContribution + fathersContribution;

    const adamSavingsContribution = trousersCost - totalContribution;

    return adamSavingsContribution;
}
