// Recompilation count: 0
export function markBuysOneLotteryTicket_3d6ceb({}: {}): number {
  // The probability of winning on one ticket is 20%. For the second, it's three times more likely, i.e., 60%
  // Probability of multiple independent events happening concurrently is the product of their probabilities
  let probability = (0.20 * 0.60) * 100;  // convert to percentage by multiplying by 100
  return probability;
}
