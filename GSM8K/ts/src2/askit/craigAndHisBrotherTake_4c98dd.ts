// Recompilation count: 0
export function craigAndHisBrotherTake_4c98dd({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Craig spelled out x1 words with x2 letters each, so he has spelled a total of x1 * x2 letters.
    let craigTotalLetters = x1 * x2;
    
    // Craig's brother has spelled words with a total count of letters 'x3' more than Craig.
    let brotherTotalLetters = craigTotalLetters + x3;
    
    // The total number of spelled letters by Craig and his brother after ten rounds is the sum of the total letters spelled by both.
    let totalSpelledLetters = craigTotalLetters + brotherTotalLetters;
    
    return totalSpelledLetters;
}
