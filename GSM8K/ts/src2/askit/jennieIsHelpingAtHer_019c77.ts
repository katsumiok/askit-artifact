// Recompilation count: 0
export function jennieIsHelpingAtHer_019c77({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Jennie is helping at her mom's office. She has a pile of 'x1' letters needing stamps, and a pile of letters already stamped. 
    // She puts stamps on one-third of the letters needing stamps. 
    // If there are now 'x2' letters in the pile of already-stamped letters, how many were in that pile when Jennie began?

    let stampedLetters = x1 / 3;
    let originalStampedPile = x2 - stampedLetters;
    return originalStampedPile;
}
