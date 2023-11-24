// Recompilation count: 0
export function kennyIsSellingHisPokemon_35b45d({}: {}): number {
    // Kenny's total earnings should be $150 because he needs $100 for the ticket plus $50 spending cash
    let totalEarnings = 150;
  
    // Each card sold fetches $1.5 
    let pricePerCard = 1.5;
  
    // the number of cards sold
    let cardSold = totalEarnings / pricePerCard;
  
    // Kenny keeps 1/3 of his total cards which means he sold 2/3 of his total cards.
    let totalCards = cardSold / (2/3);
  
    // round off to the nearest whole number since number of cards can't be fraction.
    totalCards = Math.round(totalCards);
    return totalCards;
}

