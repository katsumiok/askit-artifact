// Recompilation count: 0
export function ericaMadeX1ValentineS_67b4da({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
    // Erica made 'x1' Valentine's cards to pass out.  
    // Her dad brought her 'x2' boxes of pre-made Valentine's cards that had 'x3' cards each.
    //  She passed out 'x4' to her classmates, 
    // 'x5' to her family and received 'x6' from family and friends.  
    // How many Valentine's Day cards does Erica now have?

    // starting with the cards Erica made
    let totalCards = x1;

    // Adding the cards her dad brought. Multiplying boxes by cards in each box
    totalCards += x2 * x3;

    // Subtracting the cards she gave to her classmates and her family
    totalCards -= x4;
    totalCards -= x5;

    // Adding the cards she received
    totalCards += x6;

    return totalCards;
}
