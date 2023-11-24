// Recompilation count: 0
export function mrsShermanMadeADozen_a228c9({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // Mrs. Sherman made a dozen bread rolls for breakfast. After feeding her 'x1' children with one each, she broke each of the remaining rolls into 'x2' pieces and fed them to the chickens. How many pieces of rolls did she feed to the chickens?

  // Deduct the number of children from the dozen rolls she made
  const rollsAfterFeedingChildren = 12 - x1;

  // Break the remaining rolls into 'x2' pieces
  const piecesFedToChickens = rollsAfterFeedingChildren * x2;

  return piecesFedToChickens;
}
