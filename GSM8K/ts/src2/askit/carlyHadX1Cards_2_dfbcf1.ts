// Recompilation count: 0
export function carlyHadX1Cards_2_dfbcf1({ x1 }: {
    x1: number;
}): number {
    // Carly had 'x1' cards, 
    // 2/5 of the cards had the letter A on them, 
    // 1/2 of the remaining had the letter B, 
    // 5/8 of the rest had the letter C on them,
    // and the others had the letter D. 
    // How many of the cards had the letter D on them?
  
    const cardsWithLetterA = x1 * 2/5; // calculate number of cards with A
    const remainingAfterA = x1 - cardsWithLetterA; // remaining cards after A

    const cardsWithLetterB = remainingAfterA * 1/2; // calculate number of cards with B
    const remainingAfterB = remainingAfterA - cardsWithLetterB; // remaining cards after B

    const cardsWithLetterC = remainingAfterB * 5/8; // calculate number of cards with C
    // remaining cards after C are the cards with D
    const cardsWithLetterD = remainingAfterB - cardsWithLetterC; 

    return Math.round(cardsWithLetterD); // round the result as the number of cards cannot be fractional.
}
